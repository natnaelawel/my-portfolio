import React from 'react';
import CustomSVGIcon from '../../utils/getSVG';

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center min-h-[70px] p-4 text-sm font-mono">
      <div className="flex items-center -tracking-widest text-xs">
        <a
          className="flex items-center gap-x-3"
          href="https://github.com/bchiang7/v4"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>Designed &amp; Built by Nathaniel Hussein</div>
          <div className="github-stats flex items-center gap-x-2 ">
            <span>
              <CustomSVGIcon name="star" className="!w-4 !h-4" />
            </span>
            <span>5,701</span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
