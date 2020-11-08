import React, { useRef } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import ProficePicture from '../components/ProfilePicture';
import Content from '../components/Content';
import Terminal from '../components/Terminal/Terminal';
import Sections from '../components/Sections';
import Section from '../components/Section';
import Footer from '../components/Footer';

import * as commands from '../components/Terminal/commands';

import '../theme/tailwind.css';

const promptLabel = '$';

const IndexPage = () => {
  const terminalRef = useRef();
  return (
    <Layout>
      <Header>
        <div className="flex items-center justify-center lg:justify-between lg:items-end content-end w-full p-4 lg:p-4 lg:px-16 text-extra">
          <div className="flex flex-col md:flex-row gap-x-4 items-center">
            <ProficePicture className="h-24 flex-shrink-0" />
            <div className="flex flex-col text-center md:text-left">
              <div className="text-white font-bold text-xl md:text-2xl lg:text-3xl text-center md:text-left">
                Cedric Vanhaverbeke
              </div>
              <div className="text-xs md:text-sm ml-1">
                Software engineer at <span className="text-white">FTRPRF</span>.
              </div>
              <div className="text-xs md:text-sm ml-1">
                I solve problems through quality software.
              </div>
            </div>
          </div>
          <div className="hidden lg:flex gap-x-2 text-white">
            <p
              className="p-2 cursor-pointer hover:text-extra"
              onClick={() => {
                const about = commands.about.fn(terminalRef.current, true);
                terminalRef.current.clearStdout();
                setTimeout(() => {
                  terminalRef.current.pushToStdout(about);
                }, 1);
              }}
            >
              About
            </p>
            <p
              className="p-2 cursor-pointer hover:text-extra"
              onClick={() => {
                const technologies = commands.technologies.fn(
                  terminalRef.current,
                  true,
                );
                terminalRef.current.clearStdout();
                setTimeout(() => {
                  terminalRef.current.pushToStdout(technologies);
                }, 1);
              }}
            >
              Technologies
            </p>
            <p
              className="p-2 cursor-pointer hover:text-extra"
              onClick={() => {
                const degrees = commands.degrees.fn(terminalRef.current, true);
                terminalRef.current.clearStdout();
                setTimeout(() => {
                  terminalRef.current.pushToStdout(degrees);
                }, 1);
              }}
            >
              Degrees
            </p>
            <p
              className="p-2 cursor-pointer hover:text-extra"
              onClick={() => {
                const experiences = commands.experiences.fn(
                  terminalRef.current,
                  true,
                );
                terminalRef.current.clearStdout();
                setTimeout(() => {
                  terminalRef.current.pushToStdout(experiences);
                }, 1);
              }}
            >
              Experiences
            </p>
          </div>
        </div>
      </Header>

      <Content>
        <Terminal
          className="hidden lg:flex"
          terminalRef={terminalRef}
          promptLabel={promptLabel}
          isClosable
        />
        <Sections className="flex flex-col lg:hidden gap-y-8">
          <Section title="About" content={commands.about.fn()} />
          <Section title="Technologies" content={commands.technologies.fn()} />
          <Section title="Degrees" content={commands.degrees.fn()} />
          <Section title="Experiences" content={commands.experiences.fn()} />
        </Sections>
      </Content>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
