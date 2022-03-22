import tw, { styled } from 'twin.macro';

export const CanvasAreaWrapper = styled.div`
  ${tw`
    flex 
    w-full 
    flex 
    justify-center 
    h-full 
    overflow-auto
    py-10   
  `}
`;

export const CanvasPreview = styled.div`
  ${tw`
    mx-auto
    w-[95%]
    md:(w-[500px] min-w-[500px])
    relative 
  `}
`;
