import React from 'react';
import { BsDice5 } from 'react-icons/bs';
import { ControlHeader } from '../../common/ControlHeader';
import PalettePicker from '../../common/PalettePicker/PalettePicker';
import { RandomPaletteButton } from './PaletteControl.style';
import { generatePalette } from '../../util/paletteGenerator';
import { settingsMethod } from '../../store/useSettingsStore';

const PaletteControl = () => {
  const applyPalette = settingsMethod('applyPalette');

  const applyRandomPalette = () => {
    const newPalette = generatePalette();
    applyPalette(newPalette);
  };

  return (
    <>
      <ControlHeader>Choose Palette</ControlHeader>
      <PalettePicker />
      <RandomPaletteButton onClick={applyRandomPalette}>
        <BsDice5 />
        <p>Random Palette <b>(C)</b></p>
      </RandomPaletteButton>
    </>
  );
};

export default PaletteControl;
