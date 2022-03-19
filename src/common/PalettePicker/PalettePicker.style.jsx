import tw, { styled } from 'twin.macro';

export const PalettePickerWrapper = styled.div`
  ${tw`
    relative 
    flex
  `}
`;

export const ActiveValue = styled.div`
  ${tw`
    flex 
    flex-grow-0
    w-auto
    items-center
    cursor-pointer 
    gap-x-2
  `}
`;

export const ArrowDownIcon = styled.div`
  ${tw`
    h-full
    flex 
    items-center
    justify-center
    text-2xl 
    text-accent
  `}
`;

export const PaletteList = styled.div`
  ${tw`
    flex 
    flex-col 
    w-44 
    absolute
    top-full
    mt-1 
    gap-y-2 
    max-h-[180px]
    overflow-y-auto
    border-accent
    bg-primary
  `}

  box-shadow: rgba(25, 25, 51, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.493) 0px 30px 60px -30px;
  
  &::-webkit-scrollbar-track {
    ${tw`
      bg-transparent
    `}
  }
  &::-webkit-scrollbar {
    ${tw`
      w-[8px]
      bg-transparent
    `}
  }
  &::-webkit-scrollbar-thumb {
    ${tw`
      rounded-full
      w-[8px]
      bg-transparent
    `}
  }
  ::-webkit-scrollbar-thumb{
  ${tw`
      bg-accent
    `}
  }
`;
