// components/UserList.js
import React from 'react';

const DocList = ({ docs }) => {
  return (
    <ul>
      {docs.map(docs => (
        <li key={docs._id}>{docs.text}</li>
      ))}
    </ul>
  );
};

export default DocList;
