import React from 'react';
import Emoji from 'a11y-react-emoji';

import AsciiTable, { Row } from '../AsciiTable';

export const whoami = {
  description: 'Get to know me a little better',
  fn: function (terminal, isTypedCommand) {
    return (
      <div className="pb-4 border-b border-accent-200 mb-4">
        {isTypedCommand && (
          <span>{`${terminal.props.promptLabel} whoami`}</span>
        )}
        <p className="mb-2">
          My name is Cedric Vanhaverbeke. I'm a motivated{' '}
          <span className="text-extra">software engineer</span> from Belgium{' '}
          <Emoji symbol={'\u{1F1E7}\u{1F1EA}'} label="belgium" /> . Currently
          I'm working at <span className="text-extra">Be-Mobile</span> on the
          4411 parking application. It's awesome to work on a product that is
          used by a lot of people on a daily basis.
        </p>
        <p className="mb-2">
          I have a <span className="text-extra">can-do</span> attitude{' '}
          <Emoji symbol={'💪'} label="💪" />. I like searching for a solutions
          that are both technically elegant and maintainable in the long term.
        </p>
        <p className="mb-2">
          Programming and technology aside, I love to play boardgames and
          playing the <Emoji symbol={'🎸'} label="guitar" />. I'm also always
          available to chat and to grab a <Emoji symbol={'🍺'} label="🍺" />.
        </p>
      </div>
    );
  },
};

export const technologies = {
  description: 'What technologies are on my radar?',
  fn: function (terminal, isTypedCommand) {
    return (
      <div className="flex-col flex-grow pb-4 border-b border-accent-200 mb-4">
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
                  <li className="mt-64">ML</li>
                  <li>C/C++</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="mt-10">Java</li>
                  <li>PHP</li>
                  <li>Bash scripting</li>
                  <li className="mt-24">Python</li>
                  <li>Next, Gatsby, Remix</li>
                  <li>Serverless</li>
                  <li>SQL/NoSQL</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Helm</li>
                  <li>Go</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li style={{ marginTop: '12rem' }}>React-Native</li>
                  <li>React</li>
                  <li>Vue</li>
                  <li>Git</li>
                  <li>Node.js</li>
                  <li>React testing library</li>
                  <li>Jest</li>
                  <li>Typescript</li>
                  <li>HTML, CSS, Javascript (duh)</li>
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
      <div className="pb-4 border-b border-accent-200 mb-4">
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
      <div className="pb-4 border-b border-accent-200 mb-4">
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
            <span className="text-extra">-</span> Full stack developer at
            Be-Mobile (current)
          </li>
          <ul className="pl-4">
            <li>
              <span className="text-white">* </span> Migrating an old SSR
              rendered Symfony web application to a Vue3 frontend.
            </li>
            <li>
              <span className="text-white">* </span> Dockerizing all services
              related to 4411.
            </li>
            <li>
              <span className="text-white">* </span> Setting up and
              configuration of K8s cluster.
            </li>
            <li>
              <span className="text-white">* </span> Writing small Go services.
            </li>
          </ul>
          <li>
            <span className="text-extra">-</span> Full stack developer at Waylay
          </li>
          <ul className="pl-4">
            <li>
              <span className="text-white">* </span> Developing and maintaining
              a Node.js microservice that handles creation of serverless
              functions using Docker, Buildkit, Openfaas, MinIO, Fastify,
              MikroORM and more
            </li>
            <li>
              <span className="text-white">* </span> Frontend application in
              React
            </li>
            <li>
              <span className="text-white">* </span> Development of Waylay SDK
              in Javascript.
            </li>
          </ul>
          <li>
            <span className="text-extra">-</span> Frontend developer at FTRPRF
            (2019 - 2021)
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

export const help = {
  description: 'My obtained degrees',
  fn: function (terminal, isTypedCommand) {
    return (
      <div className="pb-4 border-b border-accent-200 mb-4">
        {isTypedCommand && (
          <span>
            {`${terminal.props.promptLabel} help`}
            <br />
          </span>
        )}
        <ul>
          <li>help - Show a list of available commands.</li>
          <li>whoami - Get to know me a bit better</li>
          <li>technologies - What technologies are on my radar?</li>
          <li>degrees - My obtained degrees</li>
          <li>experiences - Find out about my work experiences</li>
        </ul>
      </div>
    );
  },
};
