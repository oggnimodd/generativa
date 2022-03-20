import React from 'react';
import { Cell } from '../../common/Cell';
import { CircleWrapper, InnerCircle } from './ChainOfCircle.style';
import { settingsSelector } from '../../store/useSettingsStore';

const Circle = ({
  backgroundColor, innerColor, circleSize, style,
}) => {
  return (
    <CircleWrapper
      style={{
        width: circleSize,
        height: circleSize,
        backgroundColor,
        ...style,
      }}
    >
      <InnerCircle
        style={{
          width: (1 / 2) * circleSize,
          height: (1 / 2) * circleSize,
          backgroundColor: innerColor,
        }}
      />
    </CircleWrapper>
  );
};

const ChainOfCircleCell = ({
  size,
  rotation,
  circleOneTransform,
  circleTwoTransform,
  ...rest
}) => {
  const activePalette = settingsSelector('activePalette');

  const circleOneBackground = activePalette[0];
  const circleOneInner = activePalette[1];
  const circleTwoBackground = activePalette[2];
  const cirleTwoInner = activePalette[3];
  cirleTwoInner;

  return (
    <Cell
      style={{
        width: size,
        height: size,
        backgroundColor: circleOneBackground,
      }}
    >

      <Circle
        size={size}
        backgroundColor={circleOneInner}
        innerColor={circleOneBackground}
        {...rest}
        style={{
          left: circleOneTransform.left * size,
          top: circleOneTransform.top * size,
        }}
      />
      <Circle
        size={size}
        backgroundColor={circleTwoBackground}
        innerColor={cirleTwoInner}
        {...rest}
        style={{
          left: circleTwoTransform.left * size,
          top: circleTwoTransform.top * size,
        }}
      />
    </Cell>
  );
};

export default ChainOfCircleCell;
