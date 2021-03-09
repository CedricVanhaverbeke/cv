import React, { useRef } from 'react';

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
      <Header />

      <Content className="p-2 md:px-4 lg:px-16 lg:overflow-hidden">
        <Terminal
          className="hidden lg:flex"
          terminalRef={terminalRef}
          promptLabel={promptLabel}
          isClosable
        />
        <Sections className="flex flex-col lg:hidden gap-y-8">
          <Section title="Who am I" content={commands.whoami.fn()} />
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
