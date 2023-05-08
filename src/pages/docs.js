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
  # Título
  Este es un párrafo de ejemplo en **negrita**.
  `;

  return (
    <div>

      <h1>Lista de usuarios</h1>
      <DocList docs={docs} />

      <div className={styles.docs}>
        <SlateEditor/>
      </div>
    </div>
  );
};

export default Docs;
