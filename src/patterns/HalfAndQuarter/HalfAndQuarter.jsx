import React, { useMemo } from 'react';
import short from 'short-uuid';
import { settingsSelector } from '../../store/useSettingsStore';
import { canvasSelector } from '../../store/useCanvasStore';
import HalfAndQuarterCell from './HalfAndQuarterCell';
import Canvas from '../../common/Canvas';
import {
  randomFromArray, randomFromNumber, recursiveArrayIndex,
} from '../../util/random';
import CanvasRow from '../../common/CanvasRows/CanvasRows';

const translateList = ['0%', '-50%'];

const HalfAndQuarter = () => {
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
      const cellBackgroundIndex = randomFromNumber(activePalette);
      const quarterBackgroundIndex = randomFromNumber(activePalette);
      const halfBackgroundIndex = recursiveArrayIndex(activePalette, cellBackgroundIndex);

      return {
        id,
        translate: randomFromArray(translateList),
        cellBackgroundIndex,
        quarterBackgroundIndex,
        halfBackgroundIndex,
        size,
      };
    });
  }, [rows, cols, size, refreshTimeStamp, activePalette.length]);

  return useMemo(() => {
    return (
      <Canvas>
        <CanvasRow
          cellsData={cellsData}
          size={size}
          Cell={HalfAndQuarterCell}
        />
      </Canvas>
    );
  }, [size, rows, cols, activePalette.length, refreshTimeStamp]);
};

export default HalfAndQuarter;
