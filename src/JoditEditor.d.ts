import * as React from 'react';

declare module 'jodit-react' {
    export interface IJoditEditorProps {
        value: string,
        config?: object,
        onChange: (newValue: string) => void;
    }
    const JoditEditor: React.ComponentType<IJoditEditorProps>
    export default JoditEditor;
}
