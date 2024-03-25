import { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Tags = () => {

  const [tags, setTags] = useState([]);

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <div className="app">
      <h1> Tags </h1>
      <div className=''>
        <ReactTags
          classNames={{
            tags: 'bg-[#1c1e27] flex flex-col gap-2',
            tagInput: 'bg-[#1c1e27]',
            tagInputField: 'bg-[#1c1e27] p-2 w-full  border border-[#7B7f93] rounded-md',
            selected: 'flex gap-3 flex-wrap',
            tag: 'bg-[#345BC8] p-2 rounded-3xl',
            remove: 'removeClass',
            suggestions: 'suggestionsClass',
            activeSuggestion: 'activeSuggestionClass',
            clearAll: 'clearAllClass',
          }}
          tags={tags}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="top"
          autocomplete
        />
      </div>
    </div>
  );
}

export default Tags
