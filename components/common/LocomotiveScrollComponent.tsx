'use client';

import { useEffect } from 'react';

export default function LocomotiveScrollComponent() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          smoothWheel: true,
        },
      });

      locomotiveScroll.scrollTo(0, { duration: 0 });
    })();

    let anchorlinks: any = document.querySelectorAll('a[href^="#"]');

    for (let item of anchorlinks) {
      // relitere
      item.addEventListener('click', (e: any) => {
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: 'smooth',
        });
        e.preventDefault();
      });
    }
  }, []);

  return null;
}
