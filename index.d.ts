import * as React from "react";

export interface JoditProps {
    content: string;
    config: any;
    onChange(value: string): void;
}

export default class JoditEditor extends React.Component<JoditProps, any> {
    constructor(props: JoditProps, context: any);
    render(): JSX.Element;
}