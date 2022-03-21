import tw, { styled } from 'twin.macro';

export const RefreshToolTip = styled.div`
  ${tw`
    hidden 
    md:block
    opacity-0
    absolute 
    text-sm 
    bg-[#353535]
    right-full 
    text-white 
    py-1
    px-2
    mr-2
    w-24
    rounded-sm 
    outline-none
  `}

  transition : opacity ease-in-out 250ms;
`;

export const RefreshButtonWrapper = styled.button`
  ${tw`
    fixed 
    bottom-10
    right-10 
    rounded-full 
    w-[55px]
    h-[55px] 
    bg-accent 
  `}

  &:hover svg{
    transform : rotate(360deg) scale(1.2);
  }

  &:hover ${RefreshToolTip}{
    ${tw`
      md:opacity-100
    `}
  }
`;

export const Icon = styled.div`
  ${tw`
    text-3xl
    text-primary 
    w-full 
    h-full
    flex 
    items-center 
    justify-center 
    relative
  `}

  svg{
    transition : all ease-in-out 250ms;
  }
`;
