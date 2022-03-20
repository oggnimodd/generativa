import React from 'react';
import short from 'short-uuid';
import PalettePreview from '../PalettePreview/PalettePreview';
import { PaletteList as StyledList } from './PalettePicker.style';
import { settingsMethod, settingsSelector } from '../../store/useSettingsStore';

const PaletteList = React.forwardRef((props, ref) => {
  // Method
  const applyPalette = settingsMethod('applyPalette');

  // State
  const paletteList = settingsSelector('paletteList');

  return (
    <StyledList ref={ref}>
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
    </StyledList>
  );
});

export default PaletteList;
