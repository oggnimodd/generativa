import tw, { styled } from 'twin.macro';

export const Label = styled.div`
  ${tw`
    text-accent
  `}
`;

export const ControlItem = styled.div`
  ${tw`
    flex 
    justify-between 
    items-center
  `}
`;

export const Controls = styled.div`
  ${tw`
    flex 
    flex-col 
    gap-y-2
    select-none
  `}
`;

export const Value = styled.div`
  ${tw`
    flex 
    items-center
  `}

  input {
    ${tw`
      bg-transparent
      max-w-[40px]
      outline-none
      text-center
      mr-3
      border
      border-accent
    `}

    &[type=number]::-webkit-inner-spin-button, 
    &[type=number]::-webkit-outer-spin-button { 
          -webkit-appearance: none; 
          margin: 0; 
    }
  }
`;

export const ControlButton = styled.button`
  ${tw`
    rounded-full 
    font-bold 
    w-[20px] 
    h-[20px]
    bg-accent 
    flex
    items-center 
    justify-center
    text-primary
    text-xl
    p-3
  `}

  &:nth-of-type(2){
    ${tw`
      ml-2
    `}
  }
`;
