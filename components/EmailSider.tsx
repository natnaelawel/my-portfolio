import React from 'react';

type Props = {};

const EmailSideElements = (props: Props) => {
  return (
    <div className="fixed w-10 bottom-0 left-auto right-10 z-10 text-gray-600">
      <div className="flex flex-col items-center gap-y-1 after:content-[''] after:block after:w-0.5 after:h-24 after:mx-auto after:mt-5 after:bg-light_slate text-light_slate">
        <a
          style={{
            writingMode: 'vertical-lr',
          }}
          className=" hover:text-accent hover:scale-105 cursor-pointer"
          href="mailto:natnael.awel@gmail.com"
        >
          natnael.awel@gmail.com
        </a>
      </div>
    </div>
  );
};

export default EmailSideElements;
