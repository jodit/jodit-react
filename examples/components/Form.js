import React, { useCallback, useState } from 'react';

import JoditEditor, { Jodit } from '../../src/';
import './Form.css';

/**
 * @param {Jodit} jodit
 */
function preparePaste(jodit) {
	jodit.e.on(
		'paste',
		e => {
			if (confirm('Change pasted content?')) {
				jodit.e.stopPropagation('paste');
				jodit.s.insertHTML(
					Jodit.modules.Helpers.getDataTransfer(e)
						.getData(Jodit.constants.TEXT_HTML)
						.replace(/a/g, 'b')
				);
				return false;
			}
		},
		{ top: true }
	);
}
Jodit.plugins.add('preparePaste', preparePaste);

const Form = () => {
	const [isSource, setSource] = useState(false);

	const [config, setConfig] = useState({
		readonly: false,
		toolbar: true
	});

	const [textAreaValue, setTextAreaValue] = useState('Test');

	const [inputValue, setInputValue] = useState('');

	const [spin, setSpin] = useState(1);

	const toggleToolbar = useCallback(
		() =>
			setConfig(config => ({
				...config,
				toolbar: !config.toolbar
			})),
		[]
	);

	const toggleReadOnly = useCallback(
		() =>
			setConfig(config => ({
				...config,
				readonly: !config.readonly
			})),
		[]
	);

	const handleBlurAreaChange = useCallback((textAreaValue, event) => {
		console.log('handleBlurAreaChange', textAreaValue, event);
	}, []);

	const handleWYSIWYGChange = useCallback(newTextAreaValue => {
		console.log('handleWYSIWYGChange', newTextAreaValue);

		setTextAreaValue(newTextAreaValue);
		setInputValue(newTextAreaValue);

		return setTextAreaValue(() => newTextAreaValue);
	}, []);

	const handleNativeTextAreaChange = useCallback(e => {
		console.log('handleNativeTextAreaChange', e.target.value);
		setTextAreaValue(e.target.value);
		setInputValue(e.target.value);
	}, []);

	const handleInputChange = useCallback(
		e => {
			const { value } = e.target;
			setInputValue(() => value);
			handleWYSIWYGChange(value);
		},
		[handleWYSIWYGChange]
	);

	const handleSpin = useCallback(() => setSpin(spin => ++spin), []);

	const onSourceChange = useCallback(e => {
		setSource(e.target.checked);
	}, []);

	return (
		<div>
			<label>
				<input
					type="checkbox"
					onChange={onSourceChange}
					checked={isSource}
				/>{' '}
				Source
			</label>

			{!isSource ? (
				<JoditEditor
					config={config}
					onChange={handleWYSIWYGChange}
					onBlur={handleBlurAreaChange}
					value={textAreaValue}
				/>
			) : (
				<textarea
					className={'simple-textarea'}
					onChange={handleNativeTextAreaChange}
					value={textAreaValue}
				/>
			)}

			<input
				onChange={handleInputChange}
				placeholder={'enter some text'}
				type={'text'}
				value={inputValue}
			/>

			<button onClick={toggleReadOnly} type={'button'}>
				{'Toggle Read-Only'}
			</button>

			<button onClick={toggleToolbar} type={'button'}>
				{'Toggle Toolbar'}
			</button>

			<button type={'button'} onClick={handleSpin}>
				{`Spin ${spin}`}
			</button>
		</div>
	);
};

export default Form;
