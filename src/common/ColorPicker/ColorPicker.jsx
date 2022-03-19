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
  id, color: initialColor, removeColor, changeColor,
}) => {
  const [color, setColor] = useState(initialColor);
  const [open, setOpen] = useState(false);
  const pickerRef = useRef();
  const wrapperRef = useRef();
  const [reposition, setReposition] = useState(false);

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
        height, top,
      } = wrapperRef.current.getBoundingClientRect();

      const scrollTop = window.pageYOffset || document.body.scrollTop;
      const bottomIndicator = scrollTop + top + height + 250;
      const viewportHeight = window.innerHeight;

      if(bottomIndicator > viewportHeight) {
        setReposition(true);
      }else{
        setReposition(false);
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

  useOnClickOutside(pickerRef, closePicker);

  return (
    <ColorPickerWrapper ref={wrapperRef}>
      <Item
        onClick={openPicker}
        style={{
          backgroundColor: color,
          pointerEvents: open ? 'none' : 'auto',
        }}
      >
        <RemoveColorButton onClick={() => removeColor(id)}>
          <AiOutlineClose />
        </RemoveColorButton>
      </Item>

      {
        open
        && (
        <PickerWrapper
          reposition={reposition}
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
