import React, {useState} from 'react';

import JoditEditor from "../../src/";

const From = () => {
	const [config, setConfig] = useState({
		readonly: false,
		toolbar: true,
	})

	const [textAreaValue, setTextAreaValue] = useState('Test')

	const [inputValue, setInputValue] = useState('')

	const [spin, setSpin] = useState(1)

	const toggleToolbar = () => (
		setConfig(config => ({
			...config,
			toolbar: !config.toolbar,
		}))
	)

	const toggleReadOnly = () => (
		setConfig(config => ({
			...config,
			readonly: !config.readonly,
		}))
	)

	const handleBlurAreaChange = (textAreaValue, event) => {
		console.log('handleBlurAreaChange', textAreaValue, event)
	};

	const handleTextAreaChange = newTextAreaValue => {
		console.log('handleTextAreaChange', newTextAreaValue)
		return (
			setTextAreaValue(() => newTextAreaValue)
		)
	}

	const handleInputChange = e => {
		const {value} = e.target
		setInputValue(() => value)
		handleTextAreaChange(value)
	}

	const handleSpin = () => setSpin(spin => ++spin)

	return (
		<div>
			<JoditEditor
				config={config}
				onChange={handleTextAreaChange}
				onBlur={handleBlurAreaChange}
				value={textAreaValue}/>
			<input
				onChange={handleInputChange}
				placeholder={"enter some text"}
				type={"text"}
				value={inputValue}/>
			<button
				onClick={toggleReadOnly}
				type={"button"}>
				{'Toggle Read-Only'}
			</button>
			<button
				onClick={toggleToolbar}
				type={"button"}>
				{'Toggle Toolbar'}
			</button>
			<button
				type={"button"}
				onClick={handleSpin}>
				{`Spin ${spin}`}
			</button>
		</div>
	)
}

export default From
