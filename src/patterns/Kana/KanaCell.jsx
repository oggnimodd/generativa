import React from 'react';
import { Cell } from '../../common/Cell';
import { Char } from './Kana.style';
import useSettingsStore from '../../store/useSettingsStore';

const KanaCell = ({
  size,
  rotation,
  char,
  colorIndex,
}) => {
  const charColor = useSettingsStore((state) => state.settings.activePalette[colorIndex]);

  return (
    <Cell
      style={{
        width: size,
        height: size,
      }}
    >
      <Char
        style={
          {
            color: charColor,
            fontSize: `${(2 / 3) * size}px`,
            transform: `rotate(${rotation}deg)`,
          }
        }
      >
        {char}
      </Char>
    </Cell>
  );
};

export default KanaCell;
