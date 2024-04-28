import { Jodit } from 'jodit/esm/index';
import * as React from 'react';

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;

export interface IJoditEditorProps {
	value: string;

	className?: string;

	config?: DeepPartial<Jodit['options']>;
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
