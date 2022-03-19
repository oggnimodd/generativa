import React from 'react';
import { ControlHeader } from '../../common/ControlHeader';
import {
  Label, ControlItem, Controls, Value, ControlButton,
} from './NumOfTilesControl.style';

const NumOfTilesControl = () => {
  const handleChange = () => {

  };

  return (
    <>
      <ControlHeader>Number Of Tiles</ControlHeader>
      <Controls>
        <ControlItem>
          <Label>
            Columns
          </Label>
          <Value>
            <input
              type="number"
              value={12}
              onChange={handleChange}
            />
            <ControlButton>-</ControlButton>
            <ControlButton>+</ControlButton>
          </Value>
        </ControlItem>
        <ControlItem>
          <Label>
            Rows
          </Label>
          <Value>
            <input
              type="number"
              value={12}
              onChange={handleChange}
            />
            <ControlButton>-</ControlButton>
            <ControlButton>+</ControlButton>
          </Value>
        </ControlItem>
      </Controls>
    </>
  );
};

export default NumOfTilesControl;
