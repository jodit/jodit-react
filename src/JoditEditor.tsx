import React, { useEffect, useRef, forwardRef } from 'react';
import type { IJodit } from 'jodit/esm/types/jodit';
import type { Jodit as JoditBaseConstructor } from 'jodit/esm/index';
import type { Config } from 'jodit/esm/config';
import { Jodit } from './include.jodit';
import type { DeepPartial } from 'jodit/esm/types';

const MAX_TRACKED_EMITTED_VALUES = 20;

function usePrevious(value: string): string {
	const ref = useRef<string>('');
	useEffect(() => {
		ref.current = value;
	}, [value]);

	// eslint-disable-next-line react-hooks/refs
	return ref.current;
}

export interface JoditEditorProps<
	T extends typeof JoditBaseConstructor = typeof Jodit
> {
	JoditConstructor?: T;
	config?: DeepPartial<Config>;
	className?: string;
	id?: string;
	name?: string;
	onBlur?: (value: string, event: MouseEvent) => void;
	onChange?: (value: string) => void;
	tabIndex?: number;
	value?: string;
	editorRef?: (editor: IJodit) => void;
}

const JoditEditor = forwardRef<IJodit, JoditEditorProps>(
	(
		{
			JoditConstructor = Jodit,
			className,
			config,
			id,
			name,
			onBlur,
			onChange,
			tabIndex,
			value,
			editorRef
		},
		ref
	) => {
		const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
		const joditRef = useRef<IJodit | null>(null);

		// Values the editor itself reported through `change` and that the
		// parent may echo back through the `value` prop. When a render
		// lags behind typing, the echoed prop is an older snapshot than
		// the editor content; writing it back would replace the DOM and
		// throw the caret to the start of the editor (#217)
		const emittedValuesRef = useRef<string[]>([]);

		useEffect(() => {
			const element = textAreaRef.current!;
			const jodit = JoditConstructor.make(element, config);
			joditRef.current = jodit;

			if (typeof editorRef === 'function') {
				editorRef(jodit);
			}

			// Keep the forwarded ref pointing at the live instance:
			// when the editor is recreated (e.g. a new `config` identity),
			// a stale ref would silently swallow all method calls (#301)
			if (ref) {
				if (typeof ref === 'function') {
					ref(jodit);
				} else {
					ref.current = jodit;
				}
			}

			return () => {
				if (jodit.isReady) {
					jodit.destruct();
				} else {
					jodit
						.waitForReady()
						.then(joditInstance => joditInstance.destruct());
				}
			};
			// `ref` is intentionally omitted: react guarantees a stable
			// identity for ref objects, and recreating the editor because
			// the consumer passed an inline ref callback would be worse
			// than a late ref update
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [JoditConstructor, config, editorRef]);

		const preClassName = usePrevious(className ?? '');

		useEffect(() => {
			const classList = joditRef.current?.container?.classList;

			if (
				preClassName !== className &&
				typeof preClassName === 'string'
			) {
				preClassName
					.split(/\s+/)
					.filter(Boolean)
					.forEach(cl => classList?.remove(cl));
			}

			if (className && typeof className === 'string') {
				className
					.split(/\s+/)
					.filter(Boolean)
					.forEach(cl => classList?.add(cl));
			}
		}, [className, preClassName]);

		useEffect(() => {
			if (joditRef.current?.workplace) {
				joditRef.current.workplace.tabIndex = tabIndex || -1;
			}
		}, [tabIndex]);

		useEffect(() => {
			const jodit = joditRef.current;
			if (!jodit?.events) {
				return;
			}

			const onBlurHandler = (event: MouseEvent) =>
				onBlur && onBlur(joditRef?.current?.value ?? '', event);

			const onChangeHandler = (value: string) => {
				const emitted = emittedValuesRef.current;
				emitted.push(value);
				if (emitted.length > MAX_TRACKED_EMITTED_VALUES) {
					emitted.splice(
						0,
						emitted.length - MAX_TRACKED_EMITTED_VALUES
					);
				}

				if (onChange) {
					onChange(value);
				}
			};

			// adding event handlers
			jodit.events
				.on('blur', onBlurHandler)
				.on('change', onChangeHandler);

			return () => {
				// Remove event handlers
				jodit.events
					?.off('blur', onBlurHandler)
					.off('change', onChangeHandler);
			};
		}, [onBlur, onChange]);

		useEffect(() => {
			const jodit = joditRef.current;

			const updateValue = () => {
				if (!jodit || value === undefined) {
					return;
				}

				const emitted = emittedValuesRef.current;
				const echoIndex = emitted.indexOf(value);

				if (echoIndex !== -1) {
					// The parent handed back something the editor reported
					// itself: either the current content or a stale
					// snapshot. Neither must be written back into the DOM
					emitted.splice(0, echoIndex + 1);
					return;
				}

				if (jodit.value !== value) {
					emitted.length = 0;
					jodit.value = value;
				}
			};

			if (jodit) {
				if (jodit.isReady) {
					updateValue();
				} else {
					jodit.waitForReady().then(updateValue);
				}
			}
		}, [value]);

		return (
			<div className={'jodit-react-container'}>
				<textarea
					defaultValue={value}
					name={name}
					id={id}
					ref={textAreaRef}
				/>
			</div>
		);
	}
);

JoditEditor.displayName = 'JoditEditor';

export default JoditEditor;
