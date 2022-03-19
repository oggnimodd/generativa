import tw, { styled } from 'twin.macro';

export const PickerWrapper = styled.div`
  ${tw`
    mt-1
    absolute 
    left-0 
    z-[90]
  `}
  
  ${({ reposition }) => (reposition ? tw`bottom-full` : tw`top-full`)}

  .react-colorful__last-control{
    ${tw`
      rounded-none
    `}
  }
`;

export const ColorInputContainer = styled.div`
  ${tw`
    py-2
    w-full
    flex
    mx-auto 
    bg-white
    justify-center
    rounded-b-[8px]
    w-[200px]
  `}
  input {
    ${tw`
      w-3/5
      border
      border-primary
      text-primary
      text-center
      text-lg
      rounded-xl
    `}
  }
`;

export const RemoveColorButton = styled.div`
  ${tw`
    absolute
    w-[15px]
    h-[15px] 
    bg-white 
    rounded-full 
    text-primary 
    items-center 
    justify-center
    -top-1 
    -right-1
    hidden
  `}

  font-size : 11px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Item = styled.button`
  ${tw`
    rounded-full 
    border 
    border-white
    w-full 
    h-full
  `}
  transition : transform ease 500ms;

  &:hover{
    ${RemoveColorButton}{
      ${tw`
        flex
      `}
    }
  }
`;

export const ColorPickerWrapper = styled.div`
  ${tw`
    h-[28px]
    w-[28px]
    flex 
    items-center 
    justify-center
    relative
  `}


  &:hover {
    ${Item}{
      transform : scale(1.1);
    }
  }
`;
