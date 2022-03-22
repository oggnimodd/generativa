import tw, { styled } from 'twin.macro';

export const PatternList = styled.ul`
  ${tw`
    flex 
    flex-nowrap 
    overflow-x-auto 
    items-center 
    select-none
  `}
`;

export const PatternName = styled.div`
  ${tw`
    text-sm 
    whitespace-nowrap 
    capitalize 
    mb-1
  `}
`;

export const PatternImage = styled.div`
  ${tw`
    w-[100px] 
    h-[100px]
    min-w-[100px] 
    min-h-[100px]
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

export const PatternItem = styled.div`
  ${tw`
    flex 
    flex-col
    justify-center 
    mr-8
    py-2
    w-[100px]  
    cursor-pointer
  `}

  &.pattern-active {
    ${tw`
      text-accent
    `}

    ${PatternImage}{
      ${tw`
        border-2 
        border-accent
      `}
    }
  }
`;
