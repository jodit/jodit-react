import * as React from 'react';
import { IJodit } from 'jodit/types';
import { Jodit } from 'jodit/types/jodit';

declare module 'jodit-react' {
	export interface IJoditEditorProps {
		value: string;

		className?: string;

		config?: Partial<IJodit['options']>;
		// eslint-disable-next-line no-unused-vars
		onChange: (newValue: string) => void;
		// eslint-disable-next-line no-unused-vars
		onBlur: (newValue: string) => void;
	}

	const JoditEditor: React.ForwardRefExoticComponent<
		React.PropsWithoutRef<IJoditEditorProps> & React.RefAttributes<Jodit>
	>;

	export default JoditEditor;
	export { Jodit };
}
