import React, { useMemo } from 'react';
import short from 'short-uuid';
import { settingsSelector } from '../../store/useSettingsStore';
import { canvasSelector } from '../../store/useCanvasStore';
import SquaresCell from './SquaresCell';
import Canvas from '../../common/Canvas';
import { randomFromArray, randomFromNumber } from '../../util/random';

const alignment = [
  'start',
  'center',
  'end',
];

const createSizes = (size) => {
  const numOfSquares = 1 + randomFromNumber(3);

  const sizes = [];
  let start = size;
  for (let i = 0; i < numOfSquares; i += 1) {
    const newSizes = start - (1 / 5) * size;
    sizes.push(newSizes);
    start = newSizes;
  }

  // last square need different size
  sizes.push(sizes[sizes.length - 1] / 2);

  return sizes;
};

const createSquare = (palette, cellSize) => {
  return {
    colorIndex: randomFromNumber(palette.length),
    justifyContent: randomFromArray(alignment),
    alignItems: randomFromArray(alignment),
    blackSquareSize: (1 / 16) * cellSize,
  };
};

const createSquares = (sizes, cellSize, palette) => {
  return sizes.map((size) => {
    return {
      size,
      ...createSquare(palette, cellSize),
    };
  });
};

const Squares = () => {
  //  Global states
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
      const sizes = createSizes(size);
      return {
        id,
        squares: createSquares(sizes, size, activePalette),
        cellBackgroundIndex: randomFromNumber(activePalette),
        size,
      };
    });
  }, [rows, cols, size, refreshTimeStamp, activePalette.length]);

  return useMemo(() => {
    return (
      <Canvas>
        {
          cellsData.map(({ ...data }) => {
            return (
              <SquaresCell
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

export default Squares;
