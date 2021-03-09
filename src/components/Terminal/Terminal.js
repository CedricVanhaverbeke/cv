import React from 'react';
import { default as CETerminal } from 'react-console-emulator';

import Window from '../Window';

import * as commands from './commands';

const Terminal = ({
  className,
  terminalRef,
  promptLabel,
  welcomeMessage,
  isClosable,
}) => {
  return (
    <Window className={className} isClosable={isClosable}>
      <CETerminal
        ref={terminalRef}
        style={{ backgroundColor: '#191A21' }}
        className="flex-grow w-full react-terminal"
        commands={commands}
        promptLabelStyle={{ color: '#FF78C3', paddingTop: 0 }}
        inputStyle={{ color: '#FFF', paddingTop: '1rem' }}
        welcomeMessage={
          welcomeMessage || (
            <div className="flex flex-col gap-x-2 w-full gap-y-6 pb-2">
              <p>My name is Cedric Vanhaverbeke. Nice to meet you! </p>
              <p>
                Enter one of the following commands to get to know me:
                <ul>
                  <li>help - Show a list of available commands.</li>
                  <li>clear - Empty the terminal window.</li>
                  <li>whoami - Get to know me a bit better</li>
                  <li>technologies - What technologies are on my radar?</li>
                  <li>degrees - My obtained degrees</li>
                  <li>experiences - Find out about my work experiences</li>
                </ul>
              </p>
            </div>
          )
        }
        promptLabel={promptLabel}
      />
    </Window>
  );
};

Terminal.defaultProps = {
  isClosable: false,
};

export default Terminal;
