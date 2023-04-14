// pages/example.js
import React from 'react';
import MDXRenderer, { getMDXStaticProps } from '../../components/MDXRenderer';

const mdxContent = `
# Este es un título

Este es un ejemplo de contenido MDX desde una variable.
`;

const ExamplePage = ({ mdxSource }) => {
  return <MDXRenderer mdxSource={mdxSource} />;
};

export async function getStaticProps() {
  const mdxProps = await getMDXStaticProps(mdxContent);
  return mdxProps;
}

export default ExamplePage;
