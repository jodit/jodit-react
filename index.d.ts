import * as React from "react";
import {IJodit} from "jodit";

export interface JoditProps {
    value: string;
    editorRef: (editor: IJodit) => void;
    onChange(value: string): void;
    config: any;
}

export default class JoditEditor extends React.Component<JoditProps, any> {
    constructor(props: JoditProps, context: any);
    render(): JSX.Element;
}
