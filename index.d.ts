import { Jodit } from 'jodit';
import * as React from 'react';

export interface IJoditEditorProps {
	value: string;

	className?: string;

	config?: Partial<Jodit['options']>;
	// eslint-disable-next-line no-unused-vars
	onChange?: (newValue: string) => void;
	// eslint-disable-next-line no-unused-vars
	onBlur?: (newValue: string) => void;
}

declare const JoditEditor: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<IJoditEditorProps> & React.RefAttributes<Jodit>
>;

export default JoditEditor;
export { Jodit };
