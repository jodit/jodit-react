import React, { useEffect, useRef, forwardRef, useLayoutEffect } from 'react';
import { func, number, object, string } from 'prop-types';
import { Jodit } from './include.jodit';
const { isFunction } = Jodit.modules.Helpers;

const JoditEditor = forwardRef(
	(
		{ config, id, name, onBlur, onChange, tabIndex, value, editorRef },
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
			textArea.current = Jodit.make(element, config);

			if (isFunction(editorRef)) {
				editorRef(textArea.current);
			}

			return () => {
				if (textArea?.current) {
					textArea.current.destruct();
				}

				textArea.current = element;
			};
		}, [config, editorRef]);

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
			if (textArea?.current?.value !== value) {
				textArea.current.value = value;
			}
		}, [value]);

		return (
			<div className={'jodit-react-container'}>
				<textarea name={name} id={id} ref={textArea} />
			</div>
		);
	}
);

JoditEditor.displayName = 'JoditEditor';

JoditEditor.propTypes = {
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
