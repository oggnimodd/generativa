import React from 'react';
import { ControlHeader } from '../../common/ControlHeader';
import Select from '../../common/Select/Select';
import { patterns } from '../../config/patterns';
import { settingsSelector, settingsMethod } from '../../store/useSettingsStore';

const PatternTypeControl = () => {
  const usePattern = settingsMethod('usePattern');
  const activePattern = settingsSelector('pattern');
  const handleChange = (e) => {
    usePattern(e.value);
  };

  return (
    <>
      <ControlHeader>
        Choose Pattern
      </ControlHeader>
      <Select
        value={activePattern}
        options={patterns}
        labelKey="name"
        valueKey="name"
        name="vertical-alignment"
        handleChange={handleChange}
      />
    </>
  );
};

export default PatternTypeControl;
