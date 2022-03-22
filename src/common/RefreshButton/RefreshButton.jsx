import React from 'react';
import { BiRefresh } from 'react-icons/bi';
import { RefreshButtonWrapper, Icon, RefreshToolTip } from './RefreshButton.style';
import { settingsMethod } from '../../store/useSettingsStore';
import { ShortCutLetter } from '../ShortCutLetter';

const RefreshButton = () => {
  const refreshPattern = settingsMethod('refreshPattern');

  return (
    <RefreshButtonWrapper onClick={refreshPattern}>
      <Icon>
        <BiRefresh />
        <RefreshToolTip>
          Refresh (<ShortCutLetter>R</ShortCutLetter>)
        </RefreshToolTip>
      </Icon>
    </RefreshButtonWrapper>
  );
};

export default RefreshButton;
