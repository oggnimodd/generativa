import React, { useMemo } from 'react';
import short from 'short-uuid';
import ScribbleCell from './ScribbleCell';
import Canvas from '../../common/Canvas';
import { settingsSelector } from '../../store/useSettingsStore';
import { canvasSelector } from '../../store/useCanvasStore';
import { randomFromArray, randomFromNumber } from '../../util/random';
import CanvasBackground from '../../common/CanvasBackground/CanvasBackground';
import CanvasRow from '../../common/CanvasRows/CanvasRows';

const direction = [1, -1];
const getDirection = () => {
  return randomFromArray(direction);
};

const Scribble = () => {
  // Global States
  const { cols, rows } = settingsSelector('numOfTiles');
  const activePalette = settingsSelector('activePalette');
  const refreshTimeStamp = settingsSelector('refreshTimeStamp');

  const width = canvasSelector('width');

  // Local
  // Cell wrapper
  const cellSize = width / cols;
  const padding = (1 / 10) * cellSize;

  // Cell Content
  const scribbleSize = cellSize - (2 * padding);

  // Data
  const createScribbles = () => {
    const numOfScribbles = 1 + randomFromNumber(16);
    const scribbles = Array.from(Array(numOfScribbles).keys());

    const collectScribbles = scribbles.map((item) => {
      return {
        scale: 1 + randomFromNumber(40) * 0.01,
        rotate: randomFromNumber(360) * getDirection(),
        skewX: randomFromNumber(30) * getDirection(),
        skewY: randomFromNumber(30) * getDirection(),
        translateX: randomFromNumber(10) * getDirection(),
        translateY: randomFromNumber(10) * getDirection(),
      };
    });

    return collectScribbles;
  };

  const area = Array.from(Array((cols - 2) * (rows + -2)).keys());
  const cellsData = area.map((id) => {
    return {
      id,
      scribbles: createScribbles(),
      size: cellSize,
      scribbleSize,
      borderWidth: 1,

      // Use to determine cell colors
      colorIndex: 1 + randomFromNumber(activePalette.slice(1)),
    };
  });

  return useMemo(() => {
    return (
      <>
        <Canvas
          style={{
            padding: cellSize,
          }}
        >
          <CanvasBackground />
          <CanvasRow
            size={cellSize}
            cellsData={cellsData}
            Cell={ScribbleCell}
          />
        </Canvas>
      </>
    );
  }, [cellSize, rows, cols, refreshTimeStamp, activePalette.length]);
};

export default Scribble;
