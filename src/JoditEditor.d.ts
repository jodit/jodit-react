import React from 'react';

export interface IJoditEditorProps {
    content: string;
    config: object;
    onChange: (newValue: string) => void;
}

declare const JoditEditor: React.ComponentType<IJoditEditorProps>
export default JoditEditor;