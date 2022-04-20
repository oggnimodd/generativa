import React, { useState, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import {
  ActiveValue,
  SelectPatternContainer,
  Icon,
  PatternListWrapper,
  ScrollArea,
} from './SelectPattern.style';
import useClickOutside from '../../hooks/useClickOutside';
import PatternList from './PatternList';
import { formatName } from '../../util/formatName';

const SelectPattern = ({
  value,
  options,
  handleChange,
}) => {
  const [open, setOpen] = useState(false);
  const toggleList = () => {
    setOpen(!open);
  };
  const listRef = useRef();

  const closeList = () => setOpen(false);

  useClickOutside(listRef, closeList, open);

  return (
    <SelectPatternContainer>
      <ActiveValue
        onClick={toggleList}
        style={{
          pointerEvents: open ? 'none' : 'auto',
        }}
      >
        <span>
          {formatName(value)}
        </span>
        <Icon open={open}>
          <IoIosArrowDown />
        </Icon>
      </ActiveValue>

      {
        open && (
        <PatternListWrapper ref={listRef}>
          <ScrollArea>
            <PatternList
              options={options}
              handleChange={handleChange}
              value={value}
            />
          </ScrollArea>
        </PatternListWrapper>
        )
      }

    </SelectPatternContainer>
  );
};

export default SelectPattern;
