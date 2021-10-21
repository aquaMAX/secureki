import React, { Fragment, useEffect, useRef, useState } from 'react';
import Navigation from './Navigation';

import styled from 'styled-components';

const StyledScroll = styled.div`
    >sticky-wrapper {
        position: absolute;
        height: 3rem; /* We need to change this value */
    }

    > sticky {
        position: absolute;
        top: 0;
        z-index: 100; /* this is optional and should be different for every project */
    }
`

const StickyNav = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <StyledScroll className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <Navigation />
        </StyledScroll>
    </Fragment>
  );
};

export default StickyNav;