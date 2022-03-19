import React from 'react';
import { SidebarWrapper } from './Sidebar.style';
import PatternTypeControl from '../PatternTypeControl/PatternTypeControl';
import NumOfTilesControl from '../NumOfTilesControl/NumOfTilesControl';
import ColorsControl from '../ColorsControl/ColorsControl';
import PaletteControl from '../PaletteControl/PaletteControl';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div>
        <PatternTypeControl />
      </div>
      <div>
        <NumOfTilesControl />
      </div>
      <div>
        <ColorsControl />
      </div>
      <div>
        <PaletteControl />
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
