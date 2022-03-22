import React, { useMemo } from 'react';
import short from 'short-uuid';
import TrianglesCell from './TrianglesCell';
import Canvas from '../../common/Canvas';
import { settingsSelector } from '../../store/useSettingsStore';
import { canvasSelector } from '../../store/useCanvasStore';
import {
  randomFromArray, randomFromNumber, recursiveArrayIndex,
} from '../../util/random';
import CanvasBackground from '../../common/CanvasBackground/CanvasBackground';
import CanvasRow from '../../common/CanvasRows/CanvasRows';

const rotate = [
  0,
  180,
];

const Triangles = () => {
  // Global States
  const { cols, rows } = settingsSelector('numOfTiles');

  // canvas background is the first color
  const activePalette = settingsSelector('activePalette');
  const availableColors = activePalette.slice(1);

  const refreshTimeStamp = settingsSelector('refreshTimeStamp');

  const width = canvasSelector('width');

  // Local
  // Cell wrapper
  const cellSize = width / cols;
  const padding = (1 / 32) * cellSize;

  // Cell Content
  const triangleSize = cellSize - (2 * padding);

  const area = Array.from(Array(cols * rows).keys());
  const cellsData = area.map((id) => {
    // why need +1 == the first index is the background color
    const cellBackgroundIndex = randomFromNumber(availableColors);
    const triangleColorIndex = recursiveArrayIndex(availableColors, cellBackgroundIndex);

    return {
      id,
      size: cellSize,
      triangleSize,
      cellBackgroundIndex,
      triangleColorIndex,
      rotation: randomFromArray(rotate),
    };
  });

  return useMemo(() => {
    return (
      <>
        <Canvas>
          <CanvasBackground />
          <CanvasRow
            cellsData={cellsData}
            Cell={TrianglesCell}
            size={cellSize}
          />
        </Canvas>
      </>
    );
  }, [cellSize, rows, cols, refreshTimeStamp, activePalette.length]);
};

export default Triangles;
