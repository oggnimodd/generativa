import tw, { styled } from 'twin.macro';

export const ScribbleWrapper = styled.div`
  ${tw`
    flex
    relative
  `}
`;

export const StyledScribble = styled.div`
  ${tw`
    absolute 
    top-0 
    left-0
    bg-transparent 
    w-full 
    h-full
  `}
`;
