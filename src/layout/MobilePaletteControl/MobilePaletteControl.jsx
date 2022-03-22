import React from 'react';
import { PanelHeader } from '../../common/MobilePanelHeader';
import { PaletteControlWrapper } from './MobilePaletteControl.style';
import MobileSelectPattern from '../../common/MobileSelectPattern/MobileSelectPattern';
import { patterns } from '../../config/patterns';

const MobilePaletteControl = () => {
  return (
    <PaletteControlWrapper>
      <PanelHeader>
        Choose Pattern
      </PanelHeader>
      <MobileSelectPattern options={patterns} />
    </PaletteControlWrapper>
  );
};

export default MobilePaletteControl;
