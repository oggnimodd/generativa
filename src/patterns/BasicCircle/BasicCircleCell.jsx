import React from 'react';
import { Cell } from '../../common/Cell';
import { Circle } from './BasicCircle.style';
import useSettingsStore from '../../store/useSettingsStore';

const CircleCell = ({
  translateX,
  translateY,
  circleWidth,
  circleHeight,
  size,
  colorIndex,
}) => {
  const circleColor = useSettingsStore((state) => state.settings.activePalette[colorIndex]);

  return (
    <Cell
      style={{
        width: size,
        height: size,
      }}
    >
      <Circle
        style={{
          width: circleWidth,
          height: circleHeight,
          backgroundColor: circleColor,
          transform: `translate(${translateX},${translateY})`,
        }}
      />
    </Cell>
  );
};

export default CircleCell;
