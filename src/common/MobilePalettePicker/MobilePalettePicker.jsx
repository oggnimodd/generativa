import React from 'react';
import short from 'short-uuid';
import { PalettePickerWrapper } from './MobilePalettePicker.style';
import { settingsMethod, settingsSelector } from '../../store/useSettingsStore';
import PalettePreview from '../PalettePreview/PalettePreview';

const MobilePalettePicker = () => {
  // Method
  const applyPalette = settingsMethod('applyPalette');

  // State
  const paletteList = settingsSelector('paletteList');

  return (
    <PalettePickerWrapper>
      {
        paletteList?.length > 0 && paletteList.map((colors) => {
          return (
            <PalettePreview
              onClick={() => applyPalette(colors)}
              key={short.generate()}
              colors={colors}
            />
          );
        })
      }
    </PalettePickerWrapper>
  );
};

export default MobilePalettePicker;
