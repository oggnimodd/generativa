import tw, { styled } from 'twin.macro';

export const CircleWrapper = styled.div`
  ${tw`
    rounded-full 
    absolute 
    z-50 
    flex 
    items-center 
    justify-center
  `}
`;

export const InnerCircle = styled.div`
  ${tw`
    rounded-full
  `}
`;
