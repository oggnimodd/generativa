/* eslint-disable react/jsx-max-props-per-line */
import React, { useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {
  HeaderWrapper,
  NavigationWrapper,
  NavItems,
  NavItemsMobile,
  NavItem,
} from './Header.style';
import Brand from '../../common/Brand/Brand';
import DownloadButton from '../../common/DownloadButton/DownloadButton';
import { HamburgerIcon } from '../../common/HamburgerIcon';
import { NavLink } from '../../common/RouterLink';
import useNavigationStore from '../../store/useNavigationStore';
import { breakpoints } from '../../constants/breakpoints';

const Header = () => {
  const showNavigation = useNavigationStore((state) => state.showNavigation);
  const toggleNavigation = useNavigationStore((state) => state.toggleNavigation);

  // Need to close navigation when resizing to larger screen
  useEffect(() => {
    const closeNavigation = () => {
      if(window.innerWidth >= breakpoints.md) {
        showNavigation && toggleNavigation();
      }
    };
    window.addEventListener('resize', closeNavigation);

    closeNavigation();
    return () => {
      window.removeEventListener('resize', closeNavigation);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Brand />
      <NavigationWrapper>

        {/* Small / Mobile Navigation */}
        <NavItemsMobile showNavigation={showNavigation}>
          <NavLink exact to="/">
            <NavItem>Editor</NavItem>
          </NavLink>

          <NavLink exact to="/about">
            <NavItem>About</NavItem>
          </NavLink>

          <NavLink exact to="/showcase">
            <NavItem>Showcase</NavItem>
          </NavLink>
        </NavItemsMobile>

        {/* Larget Screen Navigation */}
        <NavItems>

          <NavLink exact to="/">
            <NavItem>Editor</NavItem>
          </NavLink>

          <NavLink exact to="/about">
            <NavItem>About</NavItem>
          </NavLink>

          <NavLink exact to="/showcase">
            <NavItem>Showcase</NavItem>
          </NavLink>

        </NavItems>
        <DownloadButton />

        {/* HamburgerMenu */}
        <HamburgerIcon onClick={toggleNavigation}>
          {
            showNavigation
              ? <AiOutlineClose />
              : <AiOutlineMenu />
          }
        </HamburgerIcon>
      </NavigationWrapper>
    </HeaderWrapper>
  );
};

export default Header;
