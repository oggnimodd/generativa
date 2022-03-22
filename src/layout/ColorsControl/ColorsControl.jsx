import React from 'react';
import { ControlHeader } from '../../common/ControlHeader';
import ColorsDisplay from '../../common/ColorsDisplay/ColorsDisplay';

const ColorsControl = () => {
  return (
    <>
      <ControlHeader>Choose Colors</ControlHeader>
      <ColorsDisplay />
    </>
  );
};

export default ColorsControl;
