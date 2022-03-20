import React, { useMemo } from 'react';
import short from 'short-uuid';
import { settingsSelector } from '../../store/useSettingsStore';
import { canvasSelector } from '../../store/useCanvasStore';
import SquareAndCircleCell from './SquareAndCircleCell';
import Canvas from '../../common/Canvas';
import { randomFromArray, randomFromNumber, recursiveArrayIndex } from '../../util/random';
import CanvasBackground from '../../common/CanvasBackground/CanvasBackground';

const quadrans = [0, 1, 3, 2, 0, 1, 3, 2];

const triangleTransformations = randomFromArray([
  {
    transform: 'rotate(45deg)',
    left: 0,
    transformOrigin: 'top left',
  },
  {
    transform: 'rotate(-45deg)',
    left: 0,
    transformOrigin: 'top left',
  },
  {
    transform: 'rotate(45deg)',
    right: 0,
    transformOrigin: 'top right',
  },
  {
    transform: 'rotate(-45deg)',
    right: 0,
    transformOrigin: 'top right',
  },
]);

const rotateMask = () => {
  const numOfSquareMasks = 1 + randomFromNumber(3);
  // Choose random starting position
  const start = randomFromNumber(4);
  const startIndex = quadrans.indexOf(start);
  return quadrans.slice(startIndex, startIndex + numOfSquareMasks);
};

const SquareAndCircle = () => {
  // Global states
  const { cols, rows } = settingsSelector('numOfTiles');
  const activePalette = settingsSelector('activePalette');
  const refreshTimeStamp = settingsSelector('refreshTimeStamp');

  // Local
  const width = canvasSelector('width');
  const size = width / cols;
  const triangleSize = size / 2;
  const squareMaskSize = size / 2;

  // Generate cells information
  const area = Array.from(Array(cols * rows).keys());

  const cellsData = useMemo(() => {
    return area.map((id) => {
      const cellBackgroundIndex = randomFromNumber(activePalette);
      const circleLayerBackgroundIndex = recursiveArrayIndex(activePalette, cellBackgroundIndex);
      const squareLayerBackgroundIndex = recursiveArrayIndex(activePalette, cellBackgroundIndex);
      const maskTransformation = rotateMask();

      return {
        id,
        shape: randomFromNumber(2),
        cellBackgroundIndex,
        circleLayerBackgroundIndex,
        squareLayerBackgroundIndex,
        size,
        triangleSize,
        squareMaskSize,
        maskTransformation,
        triangleTransformations,
      };
    });
  }, [rows, cols, size, refreshTimeStamp, activePalette.length]);

  return useMemo(() => {
    return (
      <Canvas>
        <CanvasBackground />
        {
          cellsData.map(({ ...data }) => {
            return (
              <SquareAndCircleCell
                key={short.generate()}
                {...data}
                size={size}
              />
            );
          })
        }
      </Canvas>
    );
  }, [size, rows, cols, activePalette.length, refreshTimeStamp]);
};

export default SquareAndCircle;
