import tw, { styled } from 'twin.macro';
import { Scrollbars as UnstyledScrollbars } from 'react-custom-scrollbars-2';

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
  `}
`;

export const PatternList = styled.div`
  ${tw`
    absolute  
    top-full 
    bg-primary 
    py-3
    w-full  
    z-50  
    h-[250px]
    mt-2
  `}
  box-shadow: rgba(0, 0, 0, 0.801) 0px 3px 8px;


  /* this line is to style the actual list wrapper from react-custom-scrollbars-2 */
  & > div > div:nth-of-type(1) {
    ${tw`
      flex 
      flex-col 
      gap-y-4
    `}
  }

  /* Custom scrollbar */
  .thumb-vertical {
    ${tw`
      bg-accent 
      rounded-full
    `}
  }
`;

export const PatternItemThumbnail = styled.ul`
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

export const PatternName = styled.li`
  ${tw`
    px-2
    capitalize 
    list-none
  `}
`;

export const PatternItem = styled.div`
  ${tw`
    flex 
    items-center 
    w-full  
    bg-primary
    cursor-pointer 
    select-none
  `}

  &:hover ${PatternName}{
    ${tw`
      text-accent
    `}
  }
`;

export const Scrollbars = styled(UnstyledScrollbars)`
  ${tw`
    w-full  
    h-0
  `}
`;
