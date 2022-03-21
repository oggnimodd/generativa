import React from 'react';
import { ControlHeader } from '../../common/ControlHeader';
// import Select from '../../common/Select/Select';
import { patterns } from '../../config/patterns';
import { settingsSelector, settingsMethod } from '../../store/useSettingsStore';
import SelectPattern from '../../common/SelectPattern/SelectPattern';

const PatternTypeControl = () => {
  const usePattern = settingsMethod('usePattern');
  const activePattern = settingsSelector('pattern');
  const handleChange = (val) => {
    usePattern(val);
  };

  return (
    <>
      <ControlHeader>
        Choose Pattern
      </ControlHeader>
      <SelectPattern
        value={activePattern}
        options={patterns}
        handleChange={handleChange}
      />
    </>
  );
};

export default PatternTypeControl;
