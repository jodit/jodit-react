import * as React from "react";
import { IJodit } from "jodit";

export interface JoditProps {
	value: string;
	onChange?: (value: string) => void;
	onBlur?: (value: string) => void;
	config?: IJodit['options'];
}

export default class JoditEditor extends React.Component<JoditProps, any> {
	constructor(props: JoditProps, context: any);
	render(): JSX.Element;
}
