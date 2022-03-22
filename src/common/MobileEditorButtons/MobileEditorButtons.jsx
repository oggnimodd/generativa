import React from 'react';
import { BiRefresh } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import { ButtonsWrapper, Button } from './MobileEditorButtons.style';
import { settingsMethod } from '../../store/useSettingsStore';

const MobileEditorButtons = ({ activeTab, resetActiveTab }) => {
  const refreshPattern = settingsMethod('refreshPattern');

  return (
    <ButtonsWrapper>
      <Button onClick={refreshPattern}><BiRefresh /></Button>

      {
        activeTab && <Button onClick={resetActiveTab}><IoIosClose /></Button>
      }

    </ButtonsWrapper>
  );
};

export default MobileEditorButtons;
