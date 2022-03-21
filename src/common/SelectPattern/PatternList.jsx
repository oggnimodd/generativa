import React from 'react';
import {
  PatternItem,
  PatternItemThumbnail,
  PatternName,
} from './SelectPattern.style';
import { formatName } from '../../util/formatName';

const PatternList = ({
  options, handleChange, value,
}) => {
  return (
    options?.length && options.map((item) => {
      return (
        <PatternItem
          onClick={() => handleChange(item.name)}
          key={`pattern-${item.name}`}
          className={item.name === value ? 'pattern-active' : null}
        >
          <PatternItemThumbnail>
            <img
              src={`/thumbnails/${item.name}.png`}
              alt="Item"
            />
          </PatternItemThumbnail>
          <PatternName>
            {formatName(item.name)}
          </PatternName>
        </PatternItem>
      );
    })
  );
};

export default PatternList;
