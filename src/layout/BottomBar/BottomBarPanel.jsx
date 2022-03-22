import React from 'react';
import { Switch, Case } from 'react-if';
import { Panel } from './BottomBar.style';
import MobileEditorButtons from '../../common/MobileEditorButtons/MobileEditorButtons';
import MobilePatternControl from '../MobilePatternControl/MobilePatternControl';
import MobileTilesControl from '../MobileTilesControl/MobileTilesControl';
import MobileColorsControl from '../MobileColorsControl/MobileColorsControl';
import MobilePaletteControl from '../MobilePaletteControl/MobilePaletteControl';

const BottomBarPanel = ({ activeTab, resetActiveTab }) => {
  if(!activeTab) return null;

  return (
    <Panel>
      <MobileEditorButtons
        activeTab={activeTab}
        resetActiveTab={resetActiveTab}
      />

      {/* Todo : make this a loop */}
      <Switch>
        <Case condition={activeTab === 'pattern'}>
          <MobilePatternControl />
        </Case>
        <Case condition={activeTab === 'tiles'}>
          <MobileTilesControl />
        </Case>
        <Case condition={activeTab === 'colors'}>
          <MobileColorsControl />
        </Case>
        <Case condition={activeTab === 'palette'}>
          <MobilePaletteControl />
        </Case>
      </Switch>

    </Panel>
  );
};

export default BottomBarPanel;
