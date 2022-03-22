import tw, { styled } from 'twin.macro';

export const SidebarWrapper = styled.div`
  ${tw`
    min-w-[280px]
    max-w-[280px]
    h-full
    px-6
    py-2 
    hidden
    md:(
      flex 
      flex-col 
      gap-y-5
    )
  `}
`;
