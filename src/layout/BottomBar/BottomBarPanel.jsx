import React from 'react';
import { Panel } from './BottomBar.style';
import MobileEditorButtons from '../../common/MobileEditorButtons/MobileEditorButtons';

const BottomBarPanel = ({ activeTab, resetActiveTab }) => {
  if(!activeTab) return null;

  return (
    <Panel>
      <MobileEditorButtons
        activeTab={activeTab}
        resetActiveTab={resetActiveTab}
      />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, ut.</p>
    </Panel>
  );
};

export default BottomBarPanel;
