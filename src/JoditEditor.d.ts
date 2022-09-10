import * as React from 'react';
import { Jodit } from 'jodit/types/jodit';

declare module 'jodit-react' {
	export interface IJoditEditorProps {
		value: string;
		config?: Partial<Jodit['options']>;
		onChange: (newValue: string) => void;
		onBlur: (newValue: string) => void;
	}
	const JoditEditor: React.ForwardRefExoticComponent<
		React.PropsWithoutRef<IJoditEditorProps> & React.RefAttributes<Jodit>
	>;
	export default JoditEditor;
	export { Jodit };
}
