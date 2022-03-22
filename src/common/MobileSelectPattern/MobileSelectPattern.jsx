import React from 'react';
import {
  PatternList, PatternItem, PatternName, PatternImage,
} from './MobleSelectPattern.style';
import { formatName } from '../../util/formatName';
import { settingsSelector, settingsMethod } from '../../store/useSettingsStore';

const MobileSelectPattern = ({ options }) => {
  const pattern = settingsSelector('pattern');
  const usePattern = settingsMethod('usePattern');

  return (
    <PatternList>
      {
        options && options.map((item) => {
          const isActive = pattern === item.name;
          return (
            <PatternItem
              className={isActive && 'pattern-active'}
              onClick={() => usePattern(item.name)}
              key={`pattern-mobile-${item.name}`}
            >
              <PatternName>
                {formatName(item.name)}
              </PatternName>
              <PatternImage>
                <img
                  src={`/thumbnails-100/${item.name}.png`}
                  alt="Item"
                />
              </PatternImage>
            </PatternItem>
          );
        })
      }
    </PatternList>

  );
};

export default MobileSelectPattern;
