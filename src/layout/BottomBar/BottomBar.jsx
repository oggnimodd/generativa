import React, { useState } from 'react';
import { Wrapper } from '../../common/Wrapper';
import { BottomBarWrapper } from './BottomBar.style';
import MobileEditorNavigation from '../MobileEditorNavigation/MobileEditorNavigation';
import BottomBarPanel from './BottomBarPanel';
import MobileEditorButtons from '../../common/MobileEditorButtons/MobileEditorButtons';

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState('');

  const changeActiveTab = (value) => {
    setActiveTab(value);
  };

  const resetActiveTab = () => setActiveTab('');

  return (
    <BottomBarWrapper>
      <Wrapper>
        {!activeTab && (
          <>
            <MobileEditorButtons activeTab={activeTab} />
            <MobileEditorNavigation changeActiveTab={changeActiveTab} />
          </>
        ) }
        <BottomBarPanel
          resetActiveTab={resetActiveTab}
          activeTab={activeTab}
        />
      </Wrapper>
    </BottomBarWrapper>
  );
};

export default BottomBar;
