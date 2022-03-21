import React from 'react';
import { Cell } from '../../common/Cell';
import useSettingsStore from '../../store/useSettingsStore';
import { TriangleWrapper } from './Triangles.style';

const TrianglesCell = ({
  triangleSize,
  size,
  cellBackgroundIndex,
  triangleColorIndex,
  rotation,
}) => {
  const cellBackground = useSettingsStore((state) => state.settings.activePalette[1 + cellBackgroundIndex]);
  const triangleColor = useSettingsStore((state) => state.settings.activePalette[1 + triangleColorIndex]);

  const border = `${triangleSize / 2}px solid transparent`;
  const triangle = `${triangleSize}px solid ${triangleColor}`;

  return (
    <Cell
      style={{
        width: size,
        height: size,
      }}
    >
      <TriangleWrapper
        style={{
          backgroundColor: cellBackground,
          width: triangleSize,
          height: triangleSize,
        }}
      >
        <div
          style={{
            width: triangleSize,
            height: triangleSize,
            borderRight: border,
            borderLeft: border,
            borderBottom: triangle,
            transform: `rotate(${rotation}deg)`,
          }}
        >
        </div>
      </TriangleWrapper>
    </Cell>
  );
};

export default TrianglesCell;
