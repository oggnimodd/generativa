import tw, { styled } from 'twin.macro';

export const CanvasAreaWrapper = styled.div`
  ${tw`
    flex 
    w-full 
    flex 
    items-center 
    justify-center
    h-full 
    overflow-auto   
  `}
`;

export const CanvasPreview = styled.div`
  ${tw`
    w-[500px]
    relative 
  `}
`;
