import tw, { styled } from 'twin.macro';

export const SelectPatternContainer = styled.div`
  ${tw`
    w-full  
    relative
  `}
`;

export const ActiveValue = styled.div`
  ${tw`
    w-full 
    px-3
    py-1
    border-2 
    border-accent 
    flex 
    items-center 
    text-accent 
    capitalize 
    justify-between
  `}
`;

export const Icon = styled.div`
  ${tw`
    text-lg
    opacity-50
  `}

  ${({ open }) => open && tw`opacity-100`}
`;

export const PatternListWrapper = styled.div`
  ${tw`
    absolute  
    top-full 
    bg-primary 
    w-full  
    z-50  
    pb-4
  `}

  box-shadow: rgba(0, 0, 0, 0.801) 0px 3px 8px;
`;

export const ScrollArea = styled.ul`
  ${tw`
    flex 
    flex-col 
    gap-y-4
    h-[250px]
    overflow-auto 
    mt-4
  `}

  scrollbar-width: thin;
  scrollbar-color: #04C9B6 transparent;

  ::-webkit-scrollbar {
    ${tw`
      bg-transparent 
      w-[0.4rem]
    `}
  }

  ::-webkit-scrollbar-thumb {
    ${tw`
      bg-accent 
      rounded-[3px]
    `}
  }
`;

export const PatternItemThumbnail = styled.div`
  ${tw`
    min-w-[70px]
    w-[70px]
    min-h-[70px]
    h-[70px]
  `}

  img{
    ${tw`
      w-full 
      h-full 
      object-cover 
      object-center
    `}
  }
`;

export const PatternName = styled.p`
  ${tw`
    px-2
    capitalize 
    list-none
  `}
`;

export const PatternItem = styled.li`
  ${tw`
    flex 
    items-center 
    w-full  
    bg-primary
    cursor-pointer 
    select-none
  `}

  &:hover ${PatternName},
  &.pattern-active ${PatternName}{
    ${tw`
      text-accent
    `}
  }
`;
