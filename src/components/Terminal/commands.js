import React from 'react';
import Emoji from 'a11y-react-emoji';

import AsciiTable, { Row } from '../AsciiTable';

export const about = {
  description: 'About me',
  fn: function (terminal, isTypedCommand) {
    return (
      <div>
        {isTypedCommand && <span>{`${terminal.props.promptLabel} about`}</span>}
        <p className="mb-2">
          My name is Cedric Vanhaverbeke. I'm a motivated{' '}
          <span className="text-extra">software engineer</span> from Belgium{' '}
          <Emoji symbol={'\u{1F1E7}\u{1F1EA}'} label="belgium" /> . Currently
          I'm working at <span className="text-extra">FTRPRF</span>, a company
          that aims to revolutionize teaching.
        </p>
        <p className="mb-2">
          In this stage of my career, I want to{' '}
          <span className="text-extra">learn</span>{' '}
          <Emoji symbol={'\u{1F4D6}'} label="book" /> as much as possible. My
          main focus at the moment is frontend developing with Javascript. I'm
          also very serious about automated testing with tools such as Jest and
          React Testing Library.
        </p>
        <p className="mb-2">
          Right now I'm more focused on the frontend of things. However, I'd
          like to be more focused on the backend side of applications. More
          specific on how{' '}
          <span className="text-extra">these services are deployed</span>.
        </p>
        <p className="mb-2">
          Programming aside, I like playing the{' '}
          <Emoji symbol={'🎸'} label="guitar" /> and doing sports. I like to
          play squash and ride my bike to work. When these Covid-days are over
          <Emoji symbol={'\u{1F9DF}'} label="zombie" />, I'd like to see a bit
          more of the world.
        </p>
      </div>
    );
  },
};

export const technologies = {
  description: 'What technologies are on my radar?',
  fn: function (terminal, isTypedCommand) {
    return (
      <div className="flex-col flex-grow">
        {isTypedCommand && (
          <span>{`${terminal.props.promptLabel} technologies`}</span>
        )}
        <div className="flex flex-col items-center justify-center">
          <span className="text-extra">EXPERIENCE</span>
        </div>
        <div className="flex flex-grow items-center justify-center mx-8">
          <div className="flex-grow border-t-2 border-extra border-dashed ml-2" />
          <div className="flex-shrink-0 text-extra">{'>'}</div>
          <div className="flex-shrink-0 text-green font-bold ml-1">{'+'}</div>
        </div>
        <div className="flex flex-grow items-center justify-center">
          <div className="flex flex-grow items-center justify-center self-stretch">
            <span className="transform -rotate-90 text-extra w-6 mt-10">
              INTEREST
            </span>
            <div className="flex flex-col flex-grow self-stretch items-center justify-center mx-2">
              <div className="border-l-2 border-extra border-dashed flex-grow w-px" />
              <div className="text-extra transform rotate-180">{'^'}</div>
              <div className="transform text-green font-bold">{'+'}</div>
            </div>
          </div>
          <AsciiTable>
            <Row>
              <div>
                <ul>
                  <li className="mt-32">Machine learning</li>
                  <li>Flutter</li>
                  <li>WebAssembly</li>
                  <li>Kubernetes</li>
                  <li>Microservice deployment</li>
                  <li>JAMstack</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Java</li>
                  <li>Angular</li>
                  <li>Python</li>
                  <li>Nodejs</li>
                  <li>Bash scripting</li>
                  <li>React-native</li>
                  <li>Jest</li>
                  <li>Next</li>
                  <li>Gatsby</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li style={{ marginTop: '12rem' }}>React</li>
                  <li>React testing library</li>
                  <li>HTML, CSS, Javascript</li>
                </ul>
              </div>
            </Row>
          </AsciiTable>
        </div>
      </div>
    );
  },
};

export const degrees = {
  description: 'My obtained degrees',
  fn: function (terminal, isTypedCommand) {
    return (
      <div>
        {isTypedCommand && (
          <span>
            {`${terminal.props.promptLabel} degrees`}
            <br />
          </span>
        )}
        These are my obtained degrees{' '}
        <Emoji symbol={'\u{1F9D1}\u{200D}\u{1F393}'} /> :
        <ul>
          <li>
            - Master of Science in Engineering Technology: Information
            Engineering Technology (UGent)
          </li>
          <li>- Bachelor of Science in Applied Computer Science (HoGent)</li>
        </ul>
      </div>
    );
  },
};

export const experiences = {
  description: 'Find out about my work experiences',
  usage: 'experiences',
  fn: function (terminal, isTypedCommand) {
    return (
      <div>
        {isTypedCommand && (
          <span>
            {`${terminal.props.promptLabel} experiences`}
            <br />
          </span>
        )}
        <p>
          These are my work experiences{' '}
          <Emoji symbol={'\u{1F4BB}'} label="work" /> :{' '}
        </p>
        <ul className="list-outside pl-1">
          <li>
            <span className="text-extra">-</span> Frontend developer at FTRPRF
            (2020 - current)
          </li>
          <ul className="pl-4">
            <li>
              <span className="text-white">* </span> Creation of new React
              application
            </li>
            <li>
              <span className="text-white">* </span> Creation of Next.js
              application
            </li>
            <li>
              <span className="text-white">* </span> Testing both applications
              in Jest and React Testing Framework
            </li>
            <li>
              <span className="text-white">* </span> Creation of shared npm
              packages
            </li>
          </ul>

          <li>
            <span className="text-extra">-</span> Internship at In The Pocket
            (2019)
          </li>
          <ul className="pl-4">
            <li>
              <span className="text-white">* </span> Helping to build a React
              application
            </li>
            <li>
              <span className="text-white">* </span> Create mappers for the
              Hubble design system for Figma (Javascript)
            </li>
          </ul>

          <li>
            <span className="text-extra">-</span> Teacher at Codefever{' '}
            <Emoji symbol={'\u{1F468}\u{200D}\u{1F3EB}'} label="teacher" />
            (2016-2019)
          </li>
          <ul className="pl-4">
            <li>
              <span className="text-white">* </span>Teaching basic programming
              principles in Scratch
            </li>
            <li>
              <span className="text-white">* </span>Explaining basic Javascript
              principles with use of Microsoft's Microbit and Minecraft
              Education Edition
            </li>
          </ul>

          <li>
            <span className="text-extra">-</span> Mobile app developer at
            Skedify (2017)
          </li>
          <ul className="list-outside pl-4">
            <li>
              <span className="text-white">* </span> iOS app developer in Swift
              3
            </li>
          </ul>

          <li>
            <span className="text-extra">-</span> Helpdesk at general hospital
            Maria Middelares (2016)
          </li>
        </ul>
      </div>
    );
  },
};
