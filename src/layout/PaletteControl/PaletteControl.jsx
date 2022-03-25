import React from 'react';
import { ControlHeader } from '../../common/ControlHeader';
import PalettePicker from '../../common/PalettePicker/PalettePicker';
import RandomPaletteButton from '../../common/RandomPaletteButton/RandomPaletteButton';
import useSettingsStore from '../../store/useSettingsStore';

const showColor = () => {
  console.log(useSettingsStore.getState().settings.activePalette);
};

const PaletteControl = () => {
  return (
    <>
      <ControlHeader>Choose Palette</ControlHeader>
      <PalettePicker />
      <RandomPaletteButton />
      <button onClick={showColor}>Show color</button>
    </>
  );
};

export default PaletteControl;
