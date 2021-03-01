import React from 'react';

import ProficePicture from './ProfilePicture';

const Header = ({ children }) => (
  <div className="w-full">
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
      {children}
    </div>
  </div>
);

export default Header;
