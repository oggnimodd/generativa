import React, { useState, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import {
  ActiveValue,
  SelectPatternContainer,
  Icon,
  PatternList,
  PatternItem,
  PatternItemThumbnail,
  PatternName,
  Scrollbars,
} from './SelectPattern.style';
import useClickOutside from '../../hooks/useClickOutside';

const formatName = (name) => {
  return name.replaceAll('-', ' ');
};

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

  useClickOutside(listRef, closeList);

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
        <Icon>
          <IoIosArrowDown />
        </Icon>
      </ActiveValue>

      {
        open && (
          <PatternList ref={listRef}>
            <Scrollbars
              renderThumbVertical={(props) => (
                <div
                  {...props}
                  className="thumb-vertical"
                />
              )}
            >
              {
            options?.length && options.map((item) => {
              return (
                <PatternItem
                  onClick={() => handleChange(item.name)}
                  key={`pattern-${item.name}`}
                >
                  <PatternItemThumbnail>
                    <img
                      src="/thumbnails/basic-circle.png"
                      alt="Item"
                    />
                  </PatternItemThumbnail>
                  <PatternName>
                    {formatName(item.name)}
                  </PatternName>
                </PatternItem>
              );
            })
          }
            </Scrollbars>
          </PatternList>
        )
      }

    </SelectPatternContainer>
  );
};

export default SelectPattern;
