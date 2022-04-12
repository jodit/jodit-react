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
		}, [textArea]);

		useEffect(() => {
			const element = textArea.current;
			textArea.current = Jodit.make(element, config);
			textArea.current.workplace.tabIndex = tabIndex || -1;

			// adding event handlers
			textArea.current.events.on(
				'blur',
				e => onBlur && onBlur(textArea.current.value, e)
			);
			textArea.current.events.on(
				'change',
				value => onChange && onChange(value)
			);

			if (id) {
				element.id = id;
			}

			if (name) {
				element.name = name;
			}

			if (isFunction(editorRef)) {
				editorRef(textArea.current);
			}

			return () => {
				if (textArea?.current) {
					textArea.current.destruct();
				}

				textArea.current = element;
			};
		}, [config]);

		useEffect(() => {
			if (textArea?.current?.value !== value) {
				textArea.current.value = value;
			}
		}, [value]);

		return (
			<div className={'jodit-react-container'}>
				<textarea ref={textArea} />
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
