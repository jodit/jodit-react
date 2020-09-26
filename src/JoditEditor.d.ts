import * as React from 'react';
import { IJodit } from 'jodit';

declare module 'jodit-react' {
	export interface IJoditEditorProps {
		value: string,
		config?: IJodit['options'];
		onChange: (newValue: string) => void;
		onBlur: (newValue: string) => void;
	}
	const JoditEditor: React.ComponentType<IJoditEditorProps>;
	export default JoditEditor;
}
