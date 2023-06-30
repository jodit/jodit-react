import React, { useEffect, useRef, forwardRef, useLayoutEffect } from 'react';
import { func, number, object, string } from 'prop-types';
import { Jodit } from './include.jodit';

const { isFunction } = Jodit.modules.Helpers;

function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}

const JoditEditor = forwardRef(
	(
		{
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
		const textArea = useRef(null);

		useLayoutEffect(() => {
			if (ref) {
				if (isFunction(ref)) {
					ref(textArea.current);
				} else {
					ref.current = textArea.current;
				}
			}
		}, [textArea, ref]);

		useEffect(() => {
			const element = textArea.current;
			const jodit = Jodit.make(element, config);
			textArea.current = jodit;

			if (isFunction(editorRef)) {
				editorRef(jodit);
			}

			return () => {
				if (jodit) {
					jodit.destruct();
				}

				textArea.current = element;
			};
		}, [config, editorRef]);

		const preClassName = usePrevious(className);

		useEffect(() => {
			const classList = textArea.current?.container?.classList;

			if (
				preClassName !== className &&
				typeof preClassName === 'string'
			) {
				preClassName.split(/\s+/).forEach(cl => classList?.remove(cl));
			}

			if (className && typeof className === 'string') {
				className.split(/\s+/).forEach(cl => classList?.add(cl));
			}
		}, [className, preClassName]);

		useEffect(() => {
			if (textArea.current.workplace) {
				textArea.current.workplace.tabIndex = tabIndex || -1;
			}
		}, [tabIndex]);

		useEffect(() => {
			if (!textArea.current.events || (!onBlur && !onChange)) {
				return;
			}

			const onBlurHandler = e =>
				onBlur && onBlur(textArea.current.value, e);
			const onChangeHandler = value => onChange && onChange(value);

			// adding event handlers
			textArea.current.events
				.on('blur', onBlurHandler)
				.on('change', onChangeHandler);

			return () => {
				// Remove event handlers
				textArea.current?.events
					?.off('blur', onBlurHandler)
					.off('change', onChangeHandler);
			};
		}, [onBlur, onChange]);

		useEffect(() => {
			const updateValue = () => {
				if (textArea.current && textArea?.current?.value !== value) {
					textArea.current.value = value;
				}
			};

			if (textArea.current) {
				textArea.current.isReady
					? updateValue()
					: textArea.current.waitForReady().then(updateValue);
			}
		}, [value]);

		return (
			<div className={'jodit-react-container'}>
				<textarea
					defaultValue={value}
					name={name}
					id={id}
					ref={textArea}
				/>
			</div>
		);
	}
);

JoditEditor.displayName = 'JoditEditor';

JoditEditor.propTypes = {
	className: string,
	config: object,
	id: string,
	name: string,
	onBlur: func,
	onChange: func,
	editorRef: func,
	tabIndex: number,
	value: string
};

export default JoditEditor;
