import tw, { styled } from 'twin.macro';

export const Cell = styled.div.attrs(() => {
  return {
    className: 'cell',
  };
})`
  ${tw`
    overflow-hidden 
    relative
  `}

  backface-visibility: hidden;
`;
