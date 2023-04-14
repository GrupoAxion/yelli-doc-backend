import SlateEditor from '@/components/SlateEditor'
import styles from '../styles/docs.module.css'
import { useState, useEffect } from 'react';
import DocList from '../components/DocList';
import MDXRenderer from '@/components/MDXRenderer';

const Docs = () => {

  const [docs, setDocs] = useState([]);

  useEffect(() => {

    async function fetchUsers() {
      const response = await fetch('/api/docs');
      const data = await response.json();
      setDocs(data.docs);
    }

    fetchUsers();

  }, []);

  const mdxContent = `
  ---
  title: **Mi página de ejemplo**
  date: 2023-04-14
  ---

  import MyReactComponent from './MyReactComponent';

  # Bienvenido a mi página de ejemplo en MDX

  Esta es una página de ejemplo en **MDX** que combina Markdown y componentes de React.

  Aquí hay un componente de React importado en este archivo MDX:

  ## Más sobre MDX

  MDX es una extensión de Markdown que te permite utilizar componentes de React junto con la sintaxis de Markdown. Esto es especialmente útil para crear contenido dinámico y reutilizable en tus documentos y páginas web.
  `;

  return (
    <div>

      <h1>Lista de usuarios</h1>
      <DocList docs={docs} />

      <div className={styles.docs}>
        <SlateEditor/>
      </div>

      <MDXRenderer mdxSource={mdxSource} />
    </div>
  );
};

export default Docs;
