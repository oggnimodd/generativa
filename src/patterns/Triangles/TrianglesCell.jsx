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
        <svg
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
          id="triangle"
          viewBox={`0 0 ${triangleSize} ${triangleSize}`}
        >
          <polygon
            style={{
              fill: triangleColor,
            }}
            points={`${triangleSize / 2} 0, ${triangleSize} ${triangleSize}, 0 ${triangleSize}`}
          />
        </svg>
      </TriangleWrapper>
    </Cell>
  );
};

export default TrianglesCell;
