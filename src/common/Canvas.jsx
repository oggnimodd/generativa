import React from 'react';
import tw, { styled } from 'twin.macro';

export const StyledCanvas = styled.div`
  ${tw`
    absolute 
    left-0
    top-0
    flex 
    flex-wrap 
    select-none
  `}
`;

const Canvas = ({ children, style, ...rest }) => {
  return (
    <StyledCanvas
      {...rest}
      style={style}
      className="canvas"
    >
      {children}
    </StyledCanvas>
  );
};

export default Canvas;
