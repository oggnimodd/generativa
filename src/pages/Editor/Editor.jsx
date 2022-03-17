import React, { useLayoutEffect, useState } from 'react';
import { EditorWrapper } from './Editor.style';

const Editor = () => {
  const [headerHeight, setHeaderHeight] = useState();

  useLayoutEffect(() => {
    const header = document.querySelector('#header');
    const height = header.getBoundingClientRect().height;
    setHeaderHeight(height);
  }, []);

  return (
    <EditorWrapper headerHeight={headerHeight}>
    </EditorWrapper>
  );
};

export default Editor;
