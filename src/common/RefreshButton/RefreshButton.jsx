import React from 'react';
import { BiRefresh } from 'react-icons/bi';
import { RefreshButtonWrapper, Icon, RefreshToolTip } from './RefreshButton.style';
import { settingsMethod } from '../../store/useSettingsStore';

const RefreshButton = () => {
  const refreshPattern = settingsMethod('refreshPattern');

  return (
    <RefreshButtonWrapper onClick={refreshPattern}>
      <Icon>
        <BiRefresh />
        <RefreshToolTip>
          Refresh (<b>R</b>)
        </RefreshToolTip>
      </Icon>
    </RefreshButtonWrapper>
  );
};

export default RefreshButton;
