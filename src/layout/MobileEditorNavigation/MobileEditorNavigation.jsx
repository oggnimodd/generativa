import React from 'react';
import {
  MobileNavigationWrapper,
  NavItem,
  IconWrapper,
  Label,
} from './MobileEditorNavigation.style';
import { editorNavigationLinks } from '../../constants/EditorNavigationLinks';

const MobileEditorNavigation = ({ changeActiveTab }) => {
  return (
    <MobileNavigationWrapper>
      {
        editorNavigationLinks?.length > 0 && editorNavigationLinks.map(({ value, Icon }) => {
          return (
            <NavItem
              key={`tab-link-${value}`}
              onClick={() => changeActiveTab(value)}
            >
              <IconWrapper><Icon /></IconWrapper>
              <Label>{value}</Label>
            </NavItem>
          );
        })
      }
    </MobileNavigationWrapper>
  );
};

export default MobileEditorNavigation;
