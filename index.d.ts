import * as React from "react";

export interface JoditProps {
    content: string;
    onChange(value: string): void;
    config: any;
}

export class JoditEditor extends React.Component<JoditProps, any> {
    constructor(props: JoditProps, context: any);
    render(): JSX.Element;
}