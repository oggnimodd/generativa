import React from 'react';
import { BsDice5 } from 'react-icons/bs';
import { RandomPaletteButtonWrapper } from './RandomPaletteButton.style';
import { generatePalette } from '../../util/paletteGenerator';
import { settingsMethod } from '../../store/useSettingsStore';
import { ShortCutLetter } from '../ShortCutLetter';

const RandomPaletteButton = () => {
  const applyPalette = settingsMethod('applyPalette');

  const applyRandomPalette = () => {
    const newPalette = generatePalette();
    applyPalette(newPalette);
  };

  return (
    <RandomPaletteButtonWrapper onClick={applyRandomPalette}>
      <BsDice5 />
      <p>Random Palette <ShortCutLetter>(C)</ShortCutLetter></p>
    </RandomPaletteButtonWrapper>
  );
};

export default RandomPaletteButton;
