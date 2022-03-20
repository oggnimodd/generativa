import React, { useMemo } from 'react';
import short from 'short-uuid';
import { settingsSelector } from '../../store/useSettingsStore';
import { canvasSelector } from '../../store/useCanvasStore';
import BasicCircleCell from './BasicCircleCell';
import Canvas from '../../common/Canvas';
import { randomFromArray, randomFromNumber } from '../../util/random';
import CanvasBackground from '../../common/CanvasBackground/CanvasBackground';

const translate = ['0', '-50%'];

const BasicCircle = () => {
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
        translateX: randomFromArray(translate),
        translateY: randomFromArray(translate),
        circleWidth: 2 * size,
        circleHeight: 2 * size,
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
        {
          cellsData.map(({ ...data }) => {
            return (
              <BasicCircleCell
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

export default BasicCircle;
