import {Button} from "@/Components/ui/button.jsx";
import Editor from "@/Components/LexicalEditor/Editor.jsx";
import {useDispatch, useSelector} from "react-redux";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {editorConfig} from "@/Components/LexicalEditor/editorConfig.js";
import {createAnswer} from "@/Features/Answers/AnswerAction.js";

export const AnswerForm = ({question_id}) => {
    const {output} = useSelector((state) => state.lexicalOutput);
    const dispatch = useDispatch();
    const onSubmit = async (e) => {
        e.preventDefault();
        if (output !== `<p class="editor-paragraph"><br></p>`) {
            let data = {
                question_id, body: output
            };
            dispatch(createAnswer(data))
        }
    };

    return (
        <>
            <div id="answer" className="mx-12 my-8">
                <h3 className="text-xl font-medium my-2">Write your answer</h3>
                <form onSubmit={onSubmit}>
                    <LexicalComposer initialConfig={editorConfig}>
                        <Editor/>
                    </LexicalComposer>
                    <Button type="submit" className="flex my-4 self-end">Submit</Button>
                </form>
            </div>
        </>
    );
};
