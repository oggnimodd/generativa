import React, { useMemo } from 'react';
import short from 'short-uuid';
import { settingsSelector } from '../../store/useSettingsStore';
import { canvasSelector } from '../../store/useCanvasStore';
import ChainOfCircleCell from './ChainOfCircleCell';
import Canvas from '../../common/Canvas';
import { randomFromArray, randomFromNumber } from '../../util/random';
import CanvasBackground from '../../common/CanvasBackground/CanvasBackground';

const rotation = [0, 90, 180, 270];

const transformations = [
  {
    left: -2 / 3,
    top: -2 / 3,
  },
  {
    left: 1 / 3,
    top: -2 / 3,
  },
  {
    left: 1 / 3,
    top: 1 / 3,
  },
  {
    left: -2 / 3,
    top: 1 / 3,
  },
];

const transformationPairing = {
  0: 2,
  1: 3,
  2: 0,
  3: 1,
};

const ChainOfCircle = () => {
  // Global states
  const { cols, rows } = settingsSelector('numOfTiles');
  const activePalette = settingsSelector('activePalette');
  const refreshTimeStamp = settingsSelector('refreshTimeStamp');

  // Local
  const width = canvasSelector('width');
  const size = width / cols;
  const circleSize = (4 / 3) * size;

  // Generate cells information
  const area = Array.from(Array(cols * rows).keys());

  const cellsData = useMemo(() => {
    return area.map((id) => {
      const transformationOneIndex = randomFromNumber(4);
      const transformationTwoIndex = transformationPairing[transformationOneIndex];

      return {
        id,
        circleSize,
        borderWidth: (1 / 3) * size,
        rotation: randomFromArray(rotation),
        circleOneTransform: transformations[transformationOneIndex],
        circleTwoTransform: transformations[transformationTwoIndex],
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
              <ChainOfCircleCell
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

export default ChainOfCircle;
