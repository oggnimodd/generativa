import React from 'react';
import { Cell } from '../../common/Cell';
import { QuarterWrapper, HalfWrapper } from './HalfAndQuarter.style';
import useSettingsStore from '../../store/useSettingsStore';

const Half = ({ size, translate, backgroundColor }) => {
  const halfTranslate = translate === '-50%' ? '-50%' : '50%';

  return (
    <HalfWrapper
      style={{
        width: size,
        height: size,
        backgroundColor,
        transform: `translateX(${halfTranslate})`,
      }}
    />
  );
};

const Quarter = ({
  size,
  translate,
  backgroundColor,
}) => {
  return (
    <QuarterWrapper
      style={{
        width: size * 2,
        height: size * 2,
        backgroundColor,
        transform: `translate(${translate},${translate})`,
      }}
    />
  );
};

const HalfAndQuarterCell = ({
  size,
  cellBackgroundIndex,
  quarterBackgroundIndex,
  halfBackgroundIndex,
  translate,
}) => {
  const cellBackground = useSettingsStore((state) => state.settings.activePalette[cellBackgroundIndex]);
  const quarterBackground = useSettingsStore((state) => state.settings.activePalette[quarterBackgroundIndex]);
  const halfBackground = useSettingsStore((state) => state.settings.activePalette[halfBackgroundIndex]);

  return (
    <Cell
      style={{
        width: size,
        height: size,
        backgroundColor: cellBackground,
      }}
    >
      <Quarter
        translate={translate}
        size={size}
        backgroundColor={quarterBackground}
      />
      <Half
        size={size}
        translate={translate}
        backgroundColor={halfBackground}
      />
    </Cell>
  );
};

export default HalfAndQuarterCell;
