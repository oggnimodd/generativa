import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const NotFoundWrapper = styled(Wrapper)`
  ${tw`
    flex
    justify-center 
    items-center 
    flex-col 
    mt-52
  `}
`;

export const Text = styled.p`
  ${tw`
    font-bold 
    text-8xl
  `}
`;

export const Message = styled.div`
  ${tw`
    mb-2
  `}
  
  a{
    ${tw`text-accent font-semibold underline`}
  }
`;
