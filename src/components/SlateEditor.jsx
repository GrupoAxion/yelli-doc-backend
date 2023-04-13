import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const SlateEditor = ({ onContentChange }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "Escribe algo..." }],
    },
  ]);

  const handleChange = (newValue) => {
    setValue(newValue);
    if (onContentChange) onContentChange(newValue);
  };

  return (
    <Slate editor={editor} value={value} onChange={handleChange}>
      <Editable />
    </Slate>
  );
};

export default SlateEditor;
