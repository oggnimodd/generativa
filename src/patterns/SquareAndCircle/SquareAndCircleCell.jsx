import React from 'react';
import short from 'short-uuid';
import { Cell } from '../../common/Cell';
import { Circle, Triangle } from './SquareAndCircle.style';
import useSettingsStore from '../../store/useSettingsStore';

const TriangleLayer = ({
  size, backgroundColor, triangleTransformations,
}) => {
  return (
    <>
      <Triangle
        style={{
          width: size * 2,
          height: size * 2,
          backgroundColor,
          ...triangleTransformations,
        }}
      />
    </>
  );
};

// triangleSize
// squareMaskSize
const CircleLayer = ({
  size, backgroundColor, cellBackground, squareMaskSize, maskTransformation,
}) => {
  const squareMasks = Array.from(Array(4).keys());

  return (
    <Circle
      style={{
        backgroundColor,
      }}
    >
      {
        squareMasks.length > 0 && squareMasks.map((id) => {
          return (
            <div
              style={{
                width: squareMaskSize,
                height: squareMaskSize,
                backgroundColor: cellBackground,
                visibility: maskTransformation.includes(id) ? 'visible' : 'hidden',
              }}
              key={short.generate()}
            />
          );
        })
      }
    </Circle>
  );
};

const SquareAndCircleCell = ({
  shape,
  cellBackgroundIndex,
  circleLayerBackgroundIndex,
  squareLayerBackgroundIndex,
  size,
  ...rest
}) => {
  const cellBackground = useSettingsStore((state) => state.settings.activePalette[cellBackgroundIndex]);
  const circleLayerBackground = useSettingsStore((state) => state.settings.activePalette[circleLayerBackgroundIndex]);
  const squareLayerBackground = useSettingsStore((state) => state.settings.activePalette[squareLayerBackgroundIndex]);

  return (
    <Cell
      style={{
        width: size,
        height: size,
        backgroundColor: cellBackground,
      }}
    >

      {
          shape === 1 ? (
            <CircleLayer
              size={size}
              backgroundColor={circleLayerBackground}
              cellBackground={cellBackground}
              {...rest}
            />
          )
            : (
              <TriangleLayer
                backgroundColor={squareLayerBackground}
                size={size}
                cellBackground={cellBackground}
                {...rest}
              />
            )
        }
    </Cell>
  );
};

export default SquareAndCircleCell;
