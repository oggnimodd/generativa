import React, { useState } from 'react';
import { ControlHeader } from '../../common/ControlHeader';
import {
  Label, ControlItem, Controls, Value, ControlButton,
} from './NumOfTilesControl.style';
import { settingsMethod, settingsSelector } from '../../store/useSettingsStore';

const NumOfTilesControl = () => {
  const [rowEmpty, setRowEmpty] = useState(false);
  const [colEmpty, setColEmpty] = useState(false);
  const changeTiles = settingsMethod('changeTiles');
  const {
    cols,
    rows,
  } = settingsSelector('numOfTiles');

  const handleChange = (e, type) => {
    if(!e.target.value) {
      type === 'cols' ? setColEmpty(true) : setRowEmpty(true);
      return;
    }

    const val = parseInt(e.target.value, 10);
    changeTiles({
      operation: 'input',
      type,
      newNumOfTiles: val,
    });

    type === 'cols' ? setColEmpty(false) : setRowEmpty(false);
  };

  const handleBlur = (type) => {
    type === 'cols' ? setColEmpty(false) : setRowEmpty(false);
  };

  return (
    <>
      <ControlHeader>Number Of Tiles</ControlHeader>
      <Controls>

        {/* Columns */}
        <ControlItem>
          <Label>
            Columns
          </Label>
          <Value>
            <input
              type="text"
              value={colEmpty ? '' : cols}
              onChange={(e) => handleChange(e, 'cols')}
              onBlur={() => handleBlur('cols')}
              maxLength={2}
            />
            <ControlButton
              onClick={() => changeTiles({
                operation: 'minus',
                type: 'cols',
              })}
            >-
            </ControlButton>
            <ControlButton
              onClick={() => changeTiles({
                operation: 'plus',
                type: 'cols',
              })}
            >+
            </ControlButton>
          </Value>
        </ControlItem>

        {/* Rows */}
        <ControlItem>
          <Label>
            Rows
          </Label>
          <Value>
            <input
              type="text"
              value={rowEmpty ? '' : rows}
              onChange={(e) => handleChange(e, 'rows')}
              onBlur={() => handleBlur('rows')}
              maxLength={2}
            />
            <ControlButton
              onClick={() => changeTiles({
                operation: 'minus',
                type: 'rows',
              })}
            >-
            </ControlButton>
            <ControlButton
              onClick={() => changeTiles({
                operation: 'plus',
                type: 'rows',
              })}
            >+
            </ControlButton>
          </Value>
        </ControlItem>
      </Controls>
    </>
  );
};

export default NumOfTilesControl;
