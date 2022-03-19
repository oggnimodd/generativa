import tw, { styled } from 'twin.macro';

export const EditorWrapper = styled.div`
  ${tw`
    flex
    w-full 
  `}


  height : ${({ headerHeight }) => `calc(100vh - ${headerHeight}px)`}
`;
