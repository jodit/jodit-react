import * as React from "react";

export interface JoditProps {
    value: string;
    onChange(value: string): void;
    config: any;
}

export default class JoditEditor extends React.Component<JoditProps, any> {
    constructor(props: JoditProps, context: any);
    render(): JSX.Element;
}
