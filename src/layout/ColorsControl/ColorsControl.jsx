import React, { useState } from 'react';
import short from 'short-uuid';
import { BiPlus } from 'react-icons/bi';
import { ColorList, NewColorButton } from './ColorsControl.style';
import { ControlHeader } from '../../common/ControlHeader';
import ColorPicker from '../../common/ColorPicker/ColorPicker';

const MAX_COLORS = 10;
const MIN_COLORS = 3;

const ColorsControl = () => {
  const [colors, setColors] = useState([
    '#4F76A0',
    '#4ECDC4',
    '#C7F464',
    '#FF6B6B',
    '#FF6B6B',
    '#847373',
    '#ffd06b',
  ]);

  const addColor = () => {
    const newColor = colors[colors.length - 1];
    const newColors = [...colors, newColor];

    if(newColors.length <= MAX_COLORS) {
      setColors(newColors);
    }
  };

  const removeColor = (id) => {
    const tempColors = [...colors];
    tempColors.splice(id, 1);
    setColors(tempColors);
  };

  return (
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
              />
            );
          })
        }
        <NewColorButton onClick={addColor}>
          <BiPlus />
        </NewColorButton>
      </ColorList>
    </>
  );
};

export default ColorsControl;
