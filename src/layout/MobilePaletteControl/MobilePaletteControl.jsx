import React from 'react';
import { PanelHeader } from '../../common/MobilePanelHeader';
import MobilePalettePicker from '../../common/MobilePalettePicker/MobilePalettePicker';
import RandomPaletteButton from '../../common/RandomPaletteButton/RandomPaletteButton';

const MobilePaletteControl = () => {
  return (
    <div>
      <PanelHeader>Choose Palette</PanelHeader>
      <MobilePalettePicker />
      <RandomPaletteButton />
    </div>
  );
};

export default MobilePaletteControl;
