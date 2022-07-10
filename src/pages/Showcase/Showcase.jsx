import React from 'react';
import Masonry from 'react-masonry-css';
import { checkWebPSupport } from 'supports-webp-sync';
import { ShowcaseWrapper } from './Showcase.style';
import { breakpoints } from '../../constants/breakpoints';
import showcaseImages from '../../constants/showcases.json';

const {
  sm,
  md,
} = breakpoints;

const masonryBreakpoints = {
  default: 3,
  [md]: 2,
  [sm]: 1,
};

const isWebpSupported = checkWebPSupport();

const Showcase = () => {
  return (
    <ShowcaseWrapper>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {
          showcaseImages?.length > 0 && showcaseImages.map((image) => {
            const ext = isWebpSupported ? 'webp' : 'png';

            return (
              <img
                width={image.width}
                height={image.height}
                src={`/showcases-${ext}/${image.name}.${ext}`}
                alt={image.name}
                key={image.name}
              />
            );
          })
        }
      </Masonry>
    </ShowcaseWrapper>
  );
};

export default Showcase;
