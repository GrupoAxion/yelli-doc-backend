import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

const MDXRenderer = ({ mdxSource }) => {
  return <MDXRemote {...mdxSource} />;
};

export default MDXRenderer;

export async function getMDXStaticProps(mdxContent) {
  const mdxSource = await serialize(mdxContent);

  return {
    props: {
      mdxSource,
    },
  };
}
