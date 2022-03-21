import React, { useMemo } from 'react';
import short from 'short-uuid';
import { settingsSelector } from '../../store/useSettingsStore';
import { canvasSelector } from '../../store/useCanvasStore';
import ThreeCirclesCell from './ThreeCirclesCell';
import Canvas from '../../common/Canvas';
import { randomFromArray, randomFromNumber } from '../../util/random';
import { shuffleArray } from '../../util/shuffleArray';

const getSizes = (size) => {
  const sizes = [size];
  let start = size;
  const quarter = start * (1 / 4);

  for (let i = 0; i < 3; i += 1) {
    sizes.push((start - quarter));
    start -= quarter;
  }

  return sizes;
};

const createCircles = (sizes, palette) => {
  const indexes = palette.map((i, id) => id);

  const shuffledPaletteIndex = shuffleArray(indexes);
  return sizes.map((size, id) => {
    return {
      size,
      colorIndex: shuffledPaletteIndex[id],
    };
  });
};

const translate = ['0', '-50%'];

const ThreeCircles = () => {
  //  Global states
  const { cols, rows } = settingsSelector('numOfTiles');
  const activePalette = settingsSelector('activePalette');
  const refreshTimeStamp = settingsSelector('refreshTimeStamp');

  // Local
  const width = canvasSelector('width');
  const size = width / cols;
  const circleWidth = size * 2;
  const sizes = getSizes(circleWidth);

  // Generate cells information
  const area = Array.from(Array(cols * rows).keys());

  const cellsData = useMemo(() => {
    return area.map((id) => {
      return {
        id,
        circles: createCircles(sizes, activePalette),
        transformationX: randomFromArray(translate),
        transformationY: randomFromArray(translate),
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
              <ThreeCirclesCell
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

export default ThreeCircles;
