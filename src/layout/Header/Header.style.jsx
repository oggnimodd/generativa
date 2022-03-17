import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const HeaderWrapper = styled(Wrapper)`
  ${tw`
    bg-primary 
    py-2
    bg-blue-600
    flex 
    justify-between
    relative
  `}
`;

export const NavigationWrapper = styled.nav`
  ${tw`
    flex 
    items-center
    gap-x-2
    md:gap-x-12
  `}
`;

export const NavItems = styled.span`
  ${tw`
    hidden
    md:flex 
    items-center
    gap-x-12
  `}
`;

export const NavItem = styled.div`
  ${tw`
    text-lg
  `}
`;

export const NavItemsMobile = styled(Wrapper)`
  ${tw`
    absolute
    md:hidden 
    flex 
    flex-col 
    top-full
    left-0
    w-full
    bg-primary
    pt-2
  `}

  transition : opacity ease-in-out 200ms;

  ${({ showNavigation }) => (showNavigation ? tw`opacity-100` : tw`opacity-0`)}

  ${NavItem}{
    ${tw`
      py-2
    `}
  }
`;
