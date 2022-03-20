import React from 'react';
import Hotkeys from 'react-hot-keys';
import { settingsMethod } from '../store/useSettingsStore';
import { generatePalette } from '../util/paletteGenerator';

const KeyBindings = () => {
  const refreshPattern = settingsMethod('refreshPattern');
  const applyPalette = settingsMethod('applyPalette');

  const applyRandomPalette = () => {
    const newPalette = generatePalette();
    applyPalette(newPalette);
  };

  return (
    <>
      <Hotkeys
        keyName="r"
        onKeyUp={refreshPattern}
      />
      <Hotkeys
        keyName="c"
        onKeyUp={applyRandomPalette}
      />
    </>
  );
};

export default KeyBindings;
