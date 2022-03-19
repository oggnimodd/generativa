import React, { useState, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import PalettePreview from '../PalettePreview/PalettePreview';
import {
  PalettePickerWrapper,
  ActiveValue,
  ArrowDownIcon,
} from './PalettePicker.style';
import useOnClickOutside from '../../hooks/useClickOutside';
import PaletteList from './PaletteList';

const activeColors = [
  '#3E494D',
  '#93515D',
  '#E85165',
];

const PalettePicker = () => {
  const pickerRef = useRef();
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  const closeList = () => {
    setShowList(false);
  };

  useOnClickOutside(pickerRef, closeList);

  return (
    <PalettePickerWrapper>
      <ActiveValue
        onClick={toggleList}
        style={{
          pointerEvents: showList ? 'none' : 'auto',
        }}
      >
        <PalettePreview colors={activeColors} />
        <ArrowDownIcon><MdKeyboardArrowDown /></ArrowDownIcon>
      </ActiveValue>
      {showList && <PaletteList ref={pickerRef} />}
    </PalettePickerWrapper>
  );
};

export default PalettePicker;
