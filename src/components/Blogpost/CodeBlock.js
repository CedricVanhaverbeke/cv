import React from 'react';
import { CodeBlock as Code, dracula } from 'react-code-blocks';

import Window from '../Window';

const CodeBlock = ({ className, children }) => {
  const language = className?.split('-')[1];

  const isSingleLine = children.toString().split('\n').length === 1;

  if(isSingleLine){
    return <span style={{fontFamily: 'Fira Mono'}} className="bg-neutral-800 rounded-md p-1 text-sm">{children}</span>
  }

  return (
    <Window className="mb-4">
      <Code
        text={children}
        language={language}
        showLineNumbers={language !== 'sh'}
        theme={{ ...dracula, backgroundColor: '#191A21' }}
      />
    </Window>
  );
};

export default CodeBlock;
