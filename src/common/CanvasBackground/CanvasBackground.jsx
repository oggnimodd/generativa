import React from 'react';
import useSettingsStore from '../../store/useSettingsStore';
import { CanvasBackgroundWrapper } from './CanvasBackground.style';

const CanvasBackground = () => {
  const backgroundColor = useSettingsStore((state) => state.settings.activePalette[0]);

  return (
    <CanvasBackgroundWrapper
      style={{
        backgroundColor,
      }}
    />
  );
};

export default CanvasBackground;
