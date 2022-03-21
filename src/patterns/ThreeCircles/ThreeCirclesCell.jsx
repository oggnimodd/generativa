import React from 'react';
import { Cell } from '../../common/Cell';
import useSettingsStore from '../../store/useSettingsStore';
import { CirclesWrapper, Circle } from './ThreeCircles.style';

const RecursiveCells = ({
  size, circles, transformationX, transformationY,
}) => {
  const currentCircle = circles[0];
  if(!currentCircle) return null;

  const currentColorIndex = currentCircle.colorIndex;

  const currentColor = useSettingsStore((state) => state.settings.activePalette[currentColorIndex]);

  const isFirst = circles.length === 4;

  return (
    <Circle
      style={{
        width: currentCircle.size,
        height: currentCircle.size,
        backgroundColor: currentColor,
        transform: isFirst && `translate(${transformationX},${transformationY})`,
      }}
    >
      <RecursiveCells
        size={size}
        circles={circles.slice(1)}
        transformationX={transformationX}
        transformationY={transformationY}
      />
    </Circle>
  );
};

const ThreeCirclesCell = ({
  cellBackgroundIndex,
  size,
  circles,
  ...rest
}) => {
  const cellBackground = useSettingsStore((state) => state.settings.activePalette[cellBackgroundIndex]);

  return (
    <Cell
      style={{
        width: size,
        height: size,
        backgroundColor: cellBackground,
      }}
    >
      <CirclesWrapper>
        <RecursiveCells
          size={size}
          circles={circles}
          {...rest}
        />
      </CirclesWrapper>
    </Cell>
  );
};

export default ThreeCirclesCell;
