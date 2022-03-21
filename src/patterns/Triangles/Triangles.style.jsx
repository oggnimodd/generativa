import tw, { styled } from 'twin.macro';

export const TriangleWrapper = styled.div`
  ${tw`
    flex 
    items-center 
    justify-center 
    w-full 
    h-full 
    absolute 
    left-1/2 
    top-1/2 
    -translate-x-1/2
    -translate-y-1/2
  `}
`;
