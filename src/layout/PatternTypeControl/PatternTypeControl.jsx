import React from 'react';
import { ControlHeader } from '../../common/ControlHeader';
import Select from '../../common/Select/Select';

const repeatModeOptions = [
  { value: 'no-repeat', label: 'No Repeat' },
  { value: 'repeat', label: 'Repeat XY' },
  { value: 'repeat-x', label: 'Repeat X' },
  { value: 'repeat-y', label: 'Repeat Y' },
];

const PatternTypeControl = () => {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <>
      <ControlHeader>
        Choose Pattern
      </ControlHeader>
      <Select
        value="repeat"
        options={repeatModeOptions}
        labelKey="label"
        valueKey="value"
        name="vertical-alignment"
        handleChange={handleChange}
      />
    </>
  );
};

export default PatternTypeControl;
