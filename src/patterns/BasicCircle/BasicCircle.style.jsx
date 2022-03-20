import tw, { styled } from 'twin.macro';

export const Circle = styled.div`
  ${tw`
    rounded-full
    absolute 
    z-50
  `}
`;

export const CanvasBackground = styled.div`
  ${tw`
    absolute 
    top-0 
    left-0 
    w-full 
    h-full
  `}
`;
