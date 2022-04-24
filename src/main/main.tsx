import React, { useRef, useEffect } from 'react'
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

import { Footer } from './footer'

export const Main = (): JSX.Element => {
    function handleEditorValidation(markers) {
        // model markers
        markers.forEach(marker => console.log("onValidate:", marker.message));
    }
    return (
        <main style={{ flexGrow: 1 }}>
            <Footer />
            <Editor
                height="90vh"
                defaultLanguage="javascript"
                defaultValue="// some comment"
                theme="vs" // vs vs-dark
                onValidate={handleEditorValidation}
                // onChange={(value) => console.log(value)}
            />
        </main>
    );
}
