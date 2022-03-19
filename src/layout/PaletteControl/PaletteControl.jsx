import React from 'react';
import { BsDice5 } from 'react-icons/bs';
import { ControlHeader } from '../../common/ControlHeader';
import PalettePicker from '../../common/PalettePicker/PalettePicker';
import { RandomPaletteButton } from './PaletteControl.style';

const PaletteControl = () => {
  return (
    <>
      <ControlHeader>Choose Palette</ControlHeader>
      <PalettePicker />
      <RandomPaletteButton>
        <BsDice5 />
        <p>Random Palette</p>
      </RandomPaletteButton>
    </>
  );
};

export default PaletteControl;
