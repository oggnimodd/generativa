import tw, { styled } from 'twin.macro';

export const Circle = styled.div`
  ${tw`
    rounded-full 
    flex 
    items-center 
    justify-center
    absolute 
    left-1/2
    top-1/2 
    -translate-x-1/2
    -translate-y-1/2
  `}
`;

export const CirclesWrapper = styled.div`
  ${tw`
    w-full 
    h-full 
    relative
  `}

  /* Transformation base on the first circle */
  & > ${Circle}{
    ${tw`
      absolute 
      left-0
      top-0
    `}
  }
`;
