import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const SlateEditor = ({ onContentChange }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: `---
      title: Mi página de ejemplo
      date: 2023-04-14
      ---
      
      import MyReactComponent from './MyReactComponent';
      
      # Bienvenido a mi página de ejemplo en MDX
      
      Esta es una página de ejemplo en **MDX** que combina Markdown y componentes de React.
      
      Aquí hay un componente de React importado en este archivo MDX:
      
      <MyReactComponent />
      
      ## Más sobre MDX
      
      MDX es una extensión de Markdown que te permite utilizar componentes de React junto con la sintaxis de Markdown. Esto es especialmente útil para crear contenido dinámico y reutilizable en tus documentos y páginas web.
      ` }],
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
