import React, {useState} from 'react';
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {AutoFocusPlugin} from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import {LinkPlugin} from "@lexical/react/LexicalLinkPlugin";
import {ListPlugin} from "@lexical/react/LexicalListPlugin";
import {MarkdownShortcutPlugin} from "@lexical/react/LexicalMarkdownShortcutPlugin";
import {TRANSFORMERS} from "@lexical/markdown";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin.jsx";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AuthoLinkPlugin.jsx";


import "./styles.css"
import {useDispatch} from "react-redux";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";
import {$generateHtmlFromNodes} from "@lexical/html";
import {saveOutput} from "@/Features/LexicalSlice.js";

function Placeholder() {
    return <div className="editor-placeholder">Enter some rich text...</div>;
}


export default function Editor() {
    const dispatch = useDispatch();

    return (
        <>
            <div className="editor-container">
                <ToolbarPlugin/>
                <div className="editor-inner">
                    <RichTextPlugin

                        contentEditable={<ContentEditable className="editor-input"/>}
                        placeholder={<Placeholder/>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin/>
                    <AutoFocusPlugin/>
                    <CodeHighlightPlugin/>
                    <ListPlugin/>
                    <LinkPlugin/>
                    <AutoLinkPlugin/>
                    <OnChangePlugin  onChange={(editorState, editor) => {
                        editorState.read(() => {
                            const html = $generateHtmlFromNodes(editor);
                            dispatch(saveOutput(html))
                        });
                    }} />
                    <ListMaxIndentLevelPlugin maxDepth={7}/>
                    <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
                </div>
            </div>


        </>
    );
}