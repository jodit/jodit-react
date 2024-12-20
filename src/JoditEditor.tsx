import React, { useEffect, useRef, forwardRef, useLayoutEffect } from 'react';
import type { IJodit } from 'jodit/types/types/jodit';
import type { Jodit as JoditConstructorType } from 'jodit';
import type { Config } from 'jodit/config';
import { Jodit } from './include.jodit';

function usePrevious(value: string): string {
	const ref = useRef<string>('');
	useEffect(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
		}
	: T;

interface Props<T extends typeof JoditConstructorType = typeof Jodit> {
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

const JoditEditor = forwardRef<IJodit, Props>(
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

		useLayoutEffect(() => {
			if (ref) {
				if (typeof ref === 'function') {
					ref(joditRef.current);
				} else {
					ref.current = joditRef.current;
				}
			}
		}, [textAreaRef, ref]);

		useEffect(() => {
			const element = textAreaRef.current!;
			const jodit = JoditConstructor.make(element, config);
			joditRef.current = jodit;

			if (typeof editorRef === 'function') {
				editorRef(jodit);
			}

			return () => {
				if (jodit) {
					jodit.destruct();
				}
			};
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
			if (!jodit?.events || !(onBlur || onChange)) {
				return;
			}

			const onBlurHandler = (event: MouseEvent) =>
				onBlur && onBlur(joditRef?.current?.value ?? '', event);

			const onChangeHandler = (value: string) =>
				onChange && onChange(value);

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
				if (jodit && value !== undefined && jodit.value !== value) {
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
