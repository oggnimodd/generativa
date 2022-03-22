import React, { useMemo } from 'react';
import { settingsSelector } from '../../store/useSettingsStore';
import { canvasSelector } from '../../store/useCanvasStore';
import KanaCell from './KanaCell';
import Canvas from '../../common/Canvas';
import { randomFromArray, randomFromNumber } from '../../util/random';
import CanvasBackground from '../../common/CanvasBackground/CanvasBackground';
import { kana } from '../../data/kanaChar';
import CanvasRow from '../../common/CanvasRows/CanvasRows';

const rotation = [0, 90, 180, 270];

const Kana = () => {
  // Global states
  const { cols, rows } = settingsSelector('numOfTiles');
  const activePalette = settingsSelector('activePalette');
  const refreshTimeStamp = settingsSelector('refreshTimeStamp');

  // Local
  const width = canvasSelector('width');
  const size = width / cols;

  // Generate cells information
  const area = Array.from(Array(cols * rows).keys());

  const cellsData = useMemo(() => {
    return area.map((id) => {
      return {
        id,
        char: randomFromArray(kana),
        rotation: randomFromArray(rotation),
        size,

        // Use to determine cell colors
        colorIndex: 1 + randomFromNumber(activePalette.slice(1)),
      };
    });
  }, [rows, cols, size, refreshTimeStamp, activePalette.length]);

  return useMemo(() => {
    return (
      <Canvas>
        <CanvasBackground />
        <CanvasRow
          cellsData={cellsData}
          size={size}
          Cell={KanaCell}
        />
      </Canvas>
    );
  }, [size, rows, cols, activePalette.length, refreshTimeStamp]);
};

export default Kana;
