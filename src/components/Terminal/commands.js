import React from 'react';
import Emoji from 'a11y-react-emoji';

import AsciiTable, { Row } from '../AsciiTable';

export const whoami = {
  description: 'Get to know me a little better',
  fn: function (terminal, isTypedCommand) {
    return (
      <div>
        {isTypedCommand && (
          <span>{`${terminal.props.promptLabel} whoami`}</span>
        )}
        <p className="mb-2">
          My name is Cedric Vanhaverbeke. I'm a motivated{' '}
          <span className="text-extra">software engineer</span> from Belgium{' '}
          <Emoji symbol={'\u{1F1E7}\u{1F1EA}'} label="belgium" /> . Currently
          I'm working at <span className="text-extra">FTRPRF</span>, a company
          that aims to teach children how to program at a young age!
        </p>
        <p className="mb-2">
          In this stage of my career, I want to{' '}
          <span className="text-extra">learn</span>{' '}
          <Emoji symbol={'\u{1F4D6}'} label="book" /> as much as possible. Right
          now, I'm solving problems in the frontend with React. I like the
          architecture of the application I'm working on to be elegant. React is
          a great tool to achieve this goal in my opinion.
        </p>
        <p className="mb-2">
          In my masters thesis I got a taste of machine learning and how it may
          help to solve otherwise impossible problems. I hope to get Tensorflow
          certified and I'm planning to blog about this journey as well.
        </p>
        <p className="mb-2">
          Programming and technology aside, I love to play boardgames and
          playing the <Emoji symbol={'🎸'} label="guitar" />. I'm also always
          available to chat and to grab a <Emoji symbol={'🍺'} label="🍺" />.
          Too bad going to a bar is not a thing at the moment...
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
                  <li className="mt-40">Machine learning</li>
                  <li>Tensorflow</li>
                  <li>PyTorch</li>
                  <li>Flutter</li>
                  <li>WebAssembly</li>
                  <li>Terraform</li>
                  <li>JAMstack</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="mt-10">Java</li>
                  <li>Python</li>
                  <li>Nodejs</li>
                  <li>Bash scripting</li>
                  <li>SKLearn</li>
                  <li>React-native</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>Jest</li>
                  <li>Next</li>
                  <li>Gatsby</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
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
      <div className="pb-2">
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
            <span className="text-extra">-</span> Master of Science in
            Engineering Technology: Information Engineering Technology (UGent,
            Magna Cum Laude)
          </li>
          <ul className="pl-4">
            <li>
              <span className="text-white">* </span> Master's thesis: Comparison
              of recommending system based on supervised and unsupervised models
              (17/20)
            </li>
          </ul>
          <li>
            <span className="text-extra">-</span> Bachelor of Science in Applied
            Computer Science (HoGent, Cum Laude)
          </li>
          <ul className="pl-4">
            <li>
              <span className="text-white">* </span> Specialization in mobile
              app development
            </li>
          </ul>
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
      <div className="pb-2">
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
              <span className="text-white">* </span> Developing and maintainer
              of 3 frontend applications.
            </li>
            <li>
              <span className="text-white">* </span> Creating a sharable UI
              library
            </li>
            <li>
              <span className="text-white">* </span> Managing 2 interns
            </li>
            <li>
              <span className="text-white">* </span> Frontend architecture
            </li>
          </ul>

          <li>
            <span className="text-extra">-</span> Master's thesis on
            researching, creation and comparing of a supervised and unsupervised
            approach to music prediction (2019)
          </li>

          <li>
            <span className="text-extra">-</span> Internship at In The Pocket
            (2019)
          </li>
          <ul className="pl-4">
            <li>
              <span className="text-white">* </span> Developing React
              application with Redux and Redux sagas
            </li>
            <li>
              <span className="text-white">* </span> Make design system
              compatible with Figma
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
