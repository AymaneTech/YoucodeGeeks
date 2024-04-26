import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useSelector } from 'react-redux';
import {useEffect} from "react";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";

export function Output() {
    const { output } = useSelector((state) => state.lexicalOutput);

    return (
        <div className="output-container">
            <div className="output-content">
                <div dangerouslySetInnerHTML={{__html: output}}></div>
            </div>
        </div>
    );
}