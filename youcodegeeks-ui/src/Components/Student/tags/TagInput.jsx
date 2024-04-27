import { WithContext as ReactTags } from 'react-tag-input';
import {useDispatch, useSelector} from "react-redux";
import {addTag, handleDelete, handleDrag} from "@/Features/TagInputSlice.js";

const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Tags = () => {
    const dispatch = useDispatch();
    const {tagsInput} = useSelector((state) => state.tagsInput);

    return (
        <div className="app">
            <h1> Tags </h1>
            <div className=' '>
                <ReactTags
                    classNames={{
                        tags: 'bg-[#02087] flex flex-col gap-2',
                        tagInput: 'bg-[#1c1e27]',
                        tagInputField: 'bg-[#1c1e27] p-2 w-full  border border-[#02087] rounded-md',
                        selected: 'flex gap-3 flex-wrap',
                        tag: 'bg-blue-500 my-2 p-2 rounded-3xl',
                        remove: 'removeClass',
                        suggestions: 'suggestionsClass',
                        activeSuggestion: 'activeSuggestionClass',
                        clearAll: 'clearAllClass',
                    }}
                    tags={tagsInput}
                    delimiters={delimiters}
                    handleDelete={(i) => dispatch(handleDelete(i))}
                    handleAddition={(tag) => dispatch(addTag(tag))}
                    handleDrag={handleDrag}
                    inputFieldPosition="top"
                    autocomplete
                />
            </div>
        </div>
    );
}

export default Tags
