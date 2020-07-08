import React, {useEffect, useRef, forwardRef, useLayoutEffect} from 'react'
import PropTypes from 'prop-types'
import {Jodit} from 'jodit'
import 'jodit/build/jodit.min.css'

const JoditEditor = forwardRef(({value, config, onChange, onBlur, tabIndex, name}, ref) => {
	const textArea = useRef(null);

	useLayoutEffect(() => {
		if (ref) {
			if (typeof ref === 'function') {
				ref(textArea.current)
			} else {
				ref.current = textArea.current
			}
		}
	}, [textArea]);

	useLayoutEffect(() => {
		const blurHandler = value => {
			onBlur && onBlur(value)
		};

		const changeHandler = value => {
			onChange && onChange(value)
		};

		const element = textArea.current;
		textArea.current = Jodit.make(element, config);

		textArea.current.value = value;
		textArea.current.events.on('blur', () => blurHandler(textArea.current.value));
		textArea.current.events.on('change', () => changeHandler(textArea.current.value));
		textArea.current.workplace.tabIndex = tabIndex || -1;

		return () => {
			textArea.current.destruct();
      textArea.current = element;
		}
	}, [config]);

	useEffect(() => {
		if (textArea && textArea.current) {
			textArea.current.value = value
		}
	}, [textArea, value]);

	return <textarea ref={textArea} name={name}></textarea>
});

JoditEditor.propTypes = {
	value: PropTypes.string,
	tabIndex: PropTypes.number,
	config: PropTypes.object,
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};

export default JoditEditor
