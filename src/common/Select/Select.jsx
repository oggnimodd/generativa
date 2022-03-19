import React from 'react';
import ReactSelect from 'react-select';
import { SingleSelectWrapper } from './Select.style';

const createOptions = (options, labelKey, valueKey) => {
  const reactSelectOptions = options.map((item) => {
    return {
      value: item[valueKey],
      label: item[labelKey],
    };
  });

  return reactSelectOptions;
};

const Select = ({
  value,
  handleChange,
  options: opt,
  labelKey,
  valueKey,
  name,
  wider,
  ...rest
}) => {
  const options = createOptions(opt, labelKey, valueKey);
  const getValue = () => {
    if(!value) return null;

    const index = options.map((i) => i.value).indexOf(value);
    return options[index];
  };

  const val = getValue();

  return (
    <SingleSelectWrapper
      wider={wider}
    >
      <ReactSelect
        name={name}
        onChange={handleChange}
        value={val}
        className="react-select-container"
        classNamePrefix="react-select"
        options={options}
        isSearchable={false}
      />
    </SingleSelectWrapper>
  );
};

export default Select;
