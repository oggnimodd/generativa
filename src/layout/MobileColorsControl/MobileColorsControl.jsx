import React from 'react';
import { PanelHeader } from '../../common/MobilePanelHeader';
import ColorsDisplay from '../../common/ColorsDisplay/ColorsDisplay';

const MobileColorsControl = () => {
  return (
    <div>
      <PanelHeader>Choose Colors</PanelHeader>
      <ColorsDisplay />
    </div>
  );
};

export default MobileColorsControl;
