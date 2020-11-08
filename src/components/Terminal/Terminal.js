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
        style={{ backgroundColor: '#191A21', fontFamily: 'Fira Code' }}
        className="flex-grow w-full"
        commands={commands}
        promptLabelStyle={{ color: '#FF78C3' }}
        inputStyle={{ color: '#FFF' }}
        welcomeMessage={
          welcomeMessage || (
            <div className="flex flex-col gap-x-2 w-full gap-y-2">
              <p>My name is Cedric Vanhaverbeke. Nice to meet you! </p>
              <p>
                Click a button on the top right or enter one of following
                commands:
              </p>
              <p>
                <ul>
                  <li> help - Show a list of available commands.</li>
                  <li>clear - Empty the terminal window.</li>
                  <li>about - About me</li>
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
