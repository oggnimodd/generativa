import React, { useMemo } from 'react';
import short from 'short-uuid';
import { BiPlus } from 'react-icons/bi';
import { ColorList, NewColorButton } from './ColorsControl.style';
import { ControlHeader } from '../../common/ControlHeader';
import ColorPicker from '../../common/ColorPicker/ColorPicker';
import { settingsSelector, settingsMethod } from '../../store/useSettingsStore';

const ColorsControl = () => {
  // method
  const addColor = settingsMethod('addColor');
  const removeColor = settingsMethod('removeColor');
  const changeColor = settingsMethod('changeColor');

  // global state
  const colors = settingsSelector('activePalette');
  const maxColors = settingsSelector('maxColors');
  const minColors = settingsSelector('minColors');
  const pattern = settingsSelector('pattern');
  const paletteTimeStamp = settingsSelector('paletteTimeStamp');

  // dont let user delete a color when it reaches the min colors
  const disableRemoveButton = minColors === colors.length;

  // this memoization  prevent rerendering from changing individual color.
  // to show color change in the individual color, need to use local state on every item
  return useMemo(() => (
    <>
      <ControlHeader>Choose Colors</ControlHeader>
      <ColorList>
        {
          colors?.length > 0 && colors.map((color, id) => {
            return (
              <ColorPicker
                key={short.generate()}
                color={color}
                id={id}
                removeColor={removeColor}
                changeColor={(e) => changeColor(e, id)}
                disableRemoveButton={disableRemoveButton}
              />
            );
          })
        }
        {
          colors.length < maxColors
          && (
          <NewColorButton onClick={addColor}>
            <BiPlus />
          </NewColorButton>
          )
        }
      </ColorList>
    </>
  ), [pattern, colors.length, paletteTimeStamp]);
};

export default ColorsControl;
