import React from 'react';

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="flex w-full gap-x-4 my-4 items-center justify-center text-white text-xl">
      <a
        href="https://www.linkedin.com/in/cedric-vanhaverbeke-6915a3b4/"
        target="_blank"
        style={{ background: '#191A21' }}
        className="p-2 rounded-lg"
      >
        <FiLinkedin />
      </a>
      <a
        href="https://github.com/CedricVanhaverbeke"
        target="_blank"
        style={{ background: '#191A21' }}
        className="p-2 rounded-lg"
      >
        <FiGithub />
      </a>
      <a
        href="https://twitter.com/cedricvhb"
        target="_blank"
        style={{ background: '#191A21' }}
        className="p-2 rounded-lg"
      >
        <FiTwitter />
      </a>
    </div>
  );
};

export default Footer;
