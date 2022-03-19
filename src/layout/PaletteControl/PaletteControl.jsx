import React from 'react';
import { BsDice5 } from 'react-icons/bs';
import { ControlHeader } from '../../common/ControlHeader';
import PalettePicker from '../../common/PalettePicker/PalettePicker';
import { RandomPaletteButton } from './PaletteControl.style';
import { generatePalette } from '../../util/paletteGenerator';

const PaletteControl = () => {
  const applyRandomPalette = () => {
    const newPalette = generatePalette();
    console.log(newPalette);
  };

  return (
    <>
      <ControlHeader>Choose Palette</ControlHeader>
      <PalettePicker />
      <RandomPaletteButton onClick={applyRandomPalette}>
        <BsDice5 />
        <p>Random Palette</p>
      </RandomPaletteButton>
    </>
  );
};

export default PaletteControl;
