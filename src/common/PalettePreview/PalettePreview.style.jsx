import tw, { styled } from 'twin.macro';

export const PalettePreviewWrapper = styled.div`
  ${tw`
    flex
    w-auto
  `}


  & > div{
    ${tw`
      flex
      flex-grow-0 
      overflow-hidden
      rounded-sm
      cursor-pointer 
    `}

    transition : transform ease 400ms;
  }

  &:hover{
    & > div {
      transform : translateY(-2px);
    }
  }
`;

export const ColorItem = styled.div`
  ${tw`
    w-[20px] 
    h-[20px]
  `}
`;
