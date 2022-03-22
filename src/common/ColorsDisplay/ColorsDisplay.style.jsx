import tw, { styled } from 'twin.macro';

export const ColorList = styled.div`
  ${tw`
    gap-2 
    grid

  `}

  grid-template-columns: repeat(auto-fill, 28px);
  justify-content: space-between;
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
    w-[28px] 
    h-[28px]
    relative
  `}
  transition : transform ease 500ms;

  &:hover {
    transform : scale(1.1);

    ${RemoveColorButton}{
      ${tw`
        flex
      `}
    }
  }
`;

export const NewColorButton = styled(Item)`
  ${tw`
    border-none
    bg-accent
    text-primary 
    flex 
    items-center 
    justify-center 
    select-none
  `}
`;
