import React, { useLayoutEffect, useState } from 'react';
import { EditorWrapper } from './Editor.style';
import Sidebar from '../../layout/Sidebar/Sidebar';
import CanvasArea from '../../layout/CanvasArea/CanvasArea';
import KeyBindings from '../../common/KeyBindings';

const Editor = () => {
  const [headerHeight, setHeaderHeight] = useState();

  useLayoutEffect(() => {
    const header = document.querySelector('#header');
    const height = header.getBoundingClientRect().height;
    setHeaderHeight(height);
  }, []);

  return (
    <EditorWrapper headerHeight={headerHeight}>
      <KeyBindings />
      <Sidebar />
      <CanvasArea />
    </EditorWrapper>
  );
};

export default Editor;
