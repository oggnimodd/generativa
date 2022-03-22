import React, { useState, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import {
  ActiveValue,
  SelectPatternContainer,
  Icon,
  PatternListWraper,
  Scrollbars,
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
          <PatternListWraper ref={listRef}>
            <Scrollbars
              renderThumbVertical={(props) => (
                <div
                  {...props}
                  className="thumb-vertical"
                />
              )}
            >
              <PatternList
                options={options}
                handleChange={handleChange}
                value={value}
              />
            </Scrollbars>
          </PatternListWraper>
        )
      }

    </SelectPatternContainer>
  );
};

export default SelectPattern;
