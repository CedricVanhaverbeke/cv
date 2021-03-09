import React from 'react';
import { Link } from 'gatsby';

import ProficePicture from './ProfilePicture';

const Header = ({ hasPageLinks, hasBackButton }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between lg:items-end content-end w-full p-4 lg:p-4 lg:px-16 text-extra">
        <div className="flex flex-col md:flex-row gap-x-4 items-center">
          <ProficePicture className="h-24 flex-shrink-0" />
          <div className="flex flex-col text-center md:text-left">
            <div
              style={{ fontFamily: 'Roboto' }}
              className="text-white font-bold text-xl md:text-2xl lg:text-3xl text-center md:text-left"
            >
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
        <div className="flex items-center space-x-2 self-center md:self-start">
          {hasPageLinks && (
            <>
              <Link
                to="/"
                className="p-2 cursor-pointer text-white hover:text-extra"
              >
                About
              </Link>
              <Link
                to="/blog"
                className="p-2 cursor-pointer text-white hover:text-extra"
              >
                Blog
              </Link>
            </>
          )}

          {hasBackButton && (
            <Link
              to="/blog"
              className="p-2 cursor-pointer text-white hover:text-extra focus:outline-none"
            >
              Back
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  hasBackButton: false,
  hasPageLinks: true,
};

export default Header;
