import tw, { styled } from 'twin.macro';
import { keyframes } from 'styled-components';

export const ModalWrapper = styled.div`
  ${tw`
    fixed 
    w-full 
    min-h-screen
    top-0 
    items-center 
    justify-center 
    bg-transparent 
    z-[1000]
    flex 
    items-center 
    justify-center
  `}
`;

export const ModalOverlay = styled.div`
  ${tw`
    absolute 
    top-0 
    left-0 
    bg-black 
    opacity-70  
    w-full 
    h-full
  `}
`;

export const CloseButton = styled.button`
  ${tw`
    absolute 
    right-2 
    top-2
    flex 
    items-center 
    justify-center 
    text-primary 
    bg-accent 
    rounded-full 
    p-1
    text-lg
  `}
`;

export const ModalContent = styled.div`
  ${tw`
      w-[85%]
      md:w-1/2
      xl:w-5/12
      2xl:max-w-[500px]
      bg-primary 
      border-2 
      border-accent 
      px-5 
      py-10
      z-[9999] 
      rounded-sm 
      flex 
      flex-col 
      relative
  `}
`;

export const OptionHeader = styled.div`
  ${tw`
    text-accent 
    text-lg 
    mb-1
  `}
`;

export const FileFormatList = styled.ul`
  ${tw`
    flex   
    select-none 
    mb-4
  `}
`;

export const FileFormatItem = styled.li`
  ${tw`
    mr-4 
    uppercase 
    cursor-pointer 
    px-3 
    rounded-sm
  `}

  &.active{
    ${tw`
      bg-accent 
      text-primary 
      font-semibold 
    `}
  }
`;

export const SizeOptionWrapper = styled.div`
  ${tw`
    relative
  `}
`;

export const SizeInputWrapper = styled.div`
  ${tw`
      inline 
      relative
  `}

  input{
    ${tw`
      px-3
      py-1
      border-2 
      border-accent 
      bg-transparent 
      outline-none  
      rounded-sm
      max-w-[120px]
    `}
  }
`;

export const Unit = styled.div`
  ${tw`
    absolute 
    flex 
    items-center 
    px-2  
    top-0 
    right-0 
    text-lg  
    h-full 
    text-accent 
    pb-1
  `}
`;

export const InputSizeError = styled.div`
  ${tw`
    text-[#F78F9A] 
    w-full
    mt-1 
    text-sm
    opacity-0
    mb-4
  `}

  ${({ sizeError }) => sizeError && tw`opacity-100`}
`;

const rotation = keyframes`
  100%{
    transform  : rotate(360deg);
  }
`;

export const DownloadLoadingIndicator = styled.div`
  ${tw`
    absolute
  `}

  svg{
    ${tw`
      text-lg
    `}
    animation : ${rotation} 800ms linear infinite; 
  }
`;

export const DownloadButton = styled.button`
  ${tw`
    px-3 
    py-1 
    bg-accent
    text-primary 
    self-start 
    w-[130px]
    flex 
    items-center 
    justify-center
  `}

  span{
    ${({ isLoading }) => isLoading && tw`opacity-0`}
  }

`;
