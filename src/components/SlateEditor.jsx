import React, { useRef, useState } from 'react';
import { render } from 'react-dom';

import EmailEditor from 'react-email-editor';

const SlateEditor = (props) => {
  const emailEditorRef = useRef(null);
  const [html, sethtml] = useState("<h1> Generando ...</h1>")
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
      sethtml(html)
    });
  };

  const onReady = () => {
    // editor is ready
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
    <div>
      <h1></h1>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor ref={emailEditorRef} onReady={onReady} />

      <hr />
      <br />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum ut nesciunt. Optio tempora blanditiis ipsum minima pariatur obcaecati culpa, quos illum quibusdam voluptatem doloribus in nisi maxime, repellat at!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum ut nesciunt. Optio tempora blanditiis ipsum minima pariatur obcaecati culpa, quos illum quibusdam voluptatem doloribus in nisi maxime, repellat at!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum ut nesciunt. Optio tempora blanditiis ipsum minima pariatur obcaecati culpa, quos illum quibusdam voluptatem doloribus in nisi maxime, repellat at!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum ut nesciunt. Optio tempora blanditiis ipsum minima pariatur obcaecati culpa, quos illum quibusdam voluptatem doloribus in nisi maxime, repellat at!
      </div>
    </div>
  );
};

export default SlateEditor;
