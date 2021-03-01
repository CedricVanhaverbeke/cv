import React, { useRef } from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/Layout';
import Header from '../components/Header';

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
      <Header terminalRef={terminalRef}>
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
          {/*         <Link to="/blog" className="p-2 cursor-pointer hover:text-extra">
            Blog
          </Link> */}
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
