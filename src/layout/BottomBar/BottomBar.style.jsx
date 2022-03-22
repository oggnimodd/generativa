import tw, { styled } from 'twin.macro';

export const BottomBarWrapper = styled.div`
  ${tw`
    md:hidden
    fixed 
    bottom-0 
    left-0 
    bg-primary
    py-1 
    w-full 
  `}
`;

export const Panel = styled.div`
  ${tw`
    w-full 
    bg-primary
  `}
`;
