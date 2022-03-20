import tw, { styled } from 'twin.macro';

export const QuarterWrapper = styled.div`
  ${tw`
    absolute
    left-0
    rounded-full 
    z-10
  `}
`;

export const HalfWrapper = styled(QuarterWrapper)`
  ${tw`
    z-20 
  `}
`;
