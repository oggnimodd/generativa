import tw, { styled } from 'twin.macro';

export const ButtonsWrapper = styled.div`
  ${tw`
    absolute 
    bottom-full 
    mb-2 
    right-0 
    flex 
    mr-2
  `}
`;

export const Button = styled.div`
  ${tw`
    text-3xl 
    rounded-full
    bg-accent 
    text-primary
    w-[40px]
    h-[40px] 
    flex 
    items-center 
    justify-center 
    ml-3
  `}
`;
