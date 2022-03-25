import React from 'react';
import { ControlHeader } from '../../common/ControlHeader';
import PalettePicker from '../../common/PalettePicker/PalettePicker';
import RandomPaletteButton from '../../common/RandomPaletteButton/RandomPaletteButton';

const PaletteControl = () => {
  return (
    <>
      <ControlHeader>Choose Palette</ControlHeader>
      <PalettePicker />
      <RandomPaletteButton />
    </>
  );
};

export default PaletteControl;
