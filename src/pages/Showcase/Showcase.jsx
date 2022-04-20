import React from 'react';
import Masonry from 'react-masonry-css';
import { ShowcaseWrapper } from './Showcase.style';
import { breakpoints } from '../../constants/breakpoints';

const modules = import.meta.globEager('../../../public/showcases/*.png');
const images = Object.keys(modules).map((item) => {
  return item.replace('../../../public/', '');
});

const {
  sm,
  md,
} = breakpoints;

const masonryBreakpoints = {
  default: 3,
  [md]: 2,
  [sm]: 1,
};

const Showcase = () => {
  return (
    <ShowcaseWrapper>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {
          images?.length > 0 && images.map((i) => {
            return (
              <img
                src={`/${i}`}
                alt={i}
                key={i}
              />
            );
          })
        }
      </Masonry>
    </ShowcaseWrapper>
  );
};

export default Showcase;
