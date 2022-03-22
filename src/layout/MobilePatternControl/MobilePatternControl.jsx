import React from 'react';
import { PanelHeader } from '../../common/MobilePanelHeader';
import { PatternControlWrapper } from './MobilePatternControl.style';
import MobileSelectPattern from '../../common/MobileSelectPattern/MobileSelectPattern';
import { patterns } from '../../config/patterns';

const MobilePatternControl = () => {
  return (
    <PatternControlWrapper>
      <PanelHeader>
        Choose Pattern
      </PanelHeader>
      <MobileSelectPattern options={patterns} />
    </PatternControlWrapper>
  );
};

export default MobilePatternControl;
