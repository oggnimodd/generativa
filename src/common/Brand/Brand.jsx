import React from 'react';
import { BrandWrapper } from './Brand.style';
import Link from '../RouterLink';

const Brand = () => {
  return (
    <BrandWrapper>
      <Link
        to="/"
      >
        Generativa
      </Link>
    </BrandWrapper>
  );
};

export default Brand;
