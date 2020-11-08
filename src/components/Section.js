import React from 'react';

import Title from './Title';
import Window from './Window';
import Terminal from './Terminal/Terminal';

import * as commands from './Terminal/commands';

const Section = ({ title, content }) => (
  <div className="flex flex-col items-center justify-center gap-y-4">
    <Title>{title}</Title>
    <Terminal welcomeMessage={content} />
  </div>
);

export default Section;
