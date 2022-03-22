import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const HeaderWrapper = styled(Wrapper)`
  ${tw`
    bg-primary 
    py-2
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

  .link-active{
    ${tw`
      text-accent
    `}
  }
`;

export const NavItem = styled.div`
 
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
    z-[1000]
  `}

  transition : opacity ease-in-out 200ms;

  ${({ showNavigation }) => (showNavigation ? tw`opacity-100 pointer-events-auto` : tw`opacity-0 pointer-events-none`)}

  ${NavItem}{
    ${tw`
      py-2
    `}
  }
`;
