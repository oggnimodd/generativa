import React from 'react';
import short from 'short-uuid';
import {
  ScribbleWrapper,
  StyledScribble,
} from './Scribble.style';
import { Cell } from '../../common/Cell';
import useSettingsStore from '../../store/useSettingsStore';

const Scribble = ({
  item, borderWidth, scribbleColor,
}) => {
  const {
    scale,
    rotate,
    skewX,
    skewY,
    translateX,
    translateY,
  } = item;

  return (
    <StyledScribble
      style={{
        transform: `scale(${scale}) rotate(${rotate}deg) skew(${skewX}deg, ${skewY}deg) translate(${translateX}px, ${translateY}px)`,
        borderWidth: `${borderWidth}px`,
        borderColor: scribbleColor,
      }}
    />
  );
};

const ScribbleCell = ({
  scribbles,
  scribbleSize,
  size,
  borderWidth,
  colorIndex,
}) => {
  const scribbleColor = useSettingsStore((state) => state.settings.activePalette[colorIndex]);

  return (
    <Cell
      style={{
        width: size,
        height: size,
        overflow: 'visible',
      }}
    >
      <ScribbleWrapper
        style={{
          width: scribbleSize,
          height: scribbleSize,
        }}
      >
        {scribbles.map((item) => (
          <Scribble
            key={short.generate()}
            item={item}
            borderWidth={borderWidth}
            scribbleColor={scribbleColor}
          />
        ))}
      </ScribbleWrapper>
    </Cell>
  );
};

export default ScribbleCell;
