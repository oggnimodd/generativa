import React, {
  useState, useRef, useLayoutEffect,
} from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { AiOutlineClose } from 'react-icons/ai';
import {
  ColorPickerWrapper,
  RemoveColorButton,
  Item,
  PickerWrapper,
  ColorInputContainer,
} from './ColorPicker.style';
import useOnClickOutside from '../../hooks/useClickOutside';

const ColorPicker = ({
  id, color: initialColor, removeColor, changeColor, disableRemoveButton,
}) => {
  const [color, setColor] = useState(initialColor);
  const [open, setOpen] = useState(false);
  const pickerRef = useRef();
  const wrapperRef = useRef();
  const [repositionY, setRepositionY] = useState(false);

  const openPicker = () => {
    setOpen(true);
  };

  const closePicker = () => {
    setOpen(false);
  };

  useLayoutEffect(() => {
    // TODO : make this a custom hook
    // Reposition picker if it's too down
    const watchPosition = () => {
      const {
        height, top, left, width,
      } = wrapperRef.current.getBoundingClientRect();
      const { height: pickerHeight } = pickerRef.current.getBoundingClientRect();

      const scrollTop = window.pageYOffset || document.body.scrollTop;

      const bottomIndicator = scrollTop + top + height + pickerHeight;

      const viewportHeight = window.innerHeight;

      // RepositionY
      if(bottomIndicator > viewportHeight) {
        setRepositionY(true);
      }else{
        setRepositionY(false);
      }
    };

    if(open) {
      // Also call on firs render
      watchPosition();
    }
  }, [open]);

  const handleChange = (val) => {
    // Change global state
    changeColor(val);

    // Change local state too
    setColor(val);
  };

  useOnClickOutside(pickerRef, closePicker, open, false);

  return (
    <ColorPickerWrapper ref={wrapperRef}>
      <Item
        onClick={openPicker}
        onTouchEnd={(e) => { open && e.preventDefault(); }}
        style={{
          backgroundColor: color,
          pointerEvents: open ? 'none' : 'auto',
        }}
      >
        {
          !disableRemoveButton && (
          <RemoveColorButton onClick={() => removeColor(id)}>
            <AiOutlineClose />
          </RemoveColorButton>
          )
        }
      </Item>

      {
        open
        && (
        <PickerWrapper
          repositionY={repositionY}
          ref={pickerRef}
        >
          <HexColorPicker
            color={color}
            onChange={handleChange}
          />
          <ColorInputContainer>
            <HexColorInput
              color={color}
              onChange={handleChange}
            />
          </ColorInputContainer>
        </PickerWrapper>
        )
      }

    </ColorPickerWrapper>
  );
};

export default ColorPicker;
