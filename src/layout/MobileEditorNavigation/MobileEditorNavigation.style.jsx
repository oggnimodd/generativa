import tw, { styled } from 'twin.macro';

export const MobileNavigationWrapper = styled.ul`
  ${tw`
    flex 
    w-full
  `}
`;

export const NavItem = styled.li`
  ${tw`
    w-[25%]     
    flex 
    flex-col 
    justify-center 
    items-center 
    py-2
    cursor-pointer
  `}

  &.tab-active {
    ${tw`
      text-accent
    `}
  }
`;

export const IconWrapper = styled.div`
  ${tw`
    text-2xl 
    mb-1
  `}
`;

export const Label = styled.div`
  ${tw`
    text-sm
  `}
`;
