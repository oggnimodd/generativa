import React from 'react';
import short from 'short-uuid';
import { PalettePreviewWrapper, ColorItem } from './PalettePreview.style';

const PalettePreview = ({ colors, onClick }) => {
  return (
    <PalettePreviewWrapper>
      <div
        role="button"
        onClick={onClick}
      >
        {
          colors?.length > 0 && colors.map((color) => {
            return (
              <ColorItem
                style={
                  {
                    backgroundColor: color,
                  }
                }
                key={short.generate()}
              />
            );
          })
        }
      </div>
    </PalettePreviewWrapper>
  );
};

export default PalettePreview;
