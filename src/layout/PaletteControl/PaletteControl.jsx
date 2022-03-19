import React from 'react';
import { ControlHeader } from '../../common/ControlHeader';
import PalettePicker from '../../common/PalettePicker/PalettePicker';

const PaletteControl = () => {
  return (
    <>
      <ControlHeader>Choose Palette</ControlHeader>
      <PalettePicker />
    </>
  );
};

export default PaletteControl;
