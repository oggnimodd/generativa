import tw, { styled } from 'twin.macro';

export const RandomPaletteButtonWrapper = styled.button`
  ${tw`
    mt-3
    flex
    items-center
    px-2 
    py-1 
    bg-accent 
    rounded-sm
    text-primary 
    text-sm 
    font-semibold
  `}

  p {
    ${tw`
      ml-2
    `}
  }
`;
