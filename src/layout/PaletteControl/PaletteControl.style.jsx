import tw, { styled } from 'twin.macro';

export const RandomPaletteButton = styled.button`
  ${tw`
    mt-3
    flex
    items-center
    px-2 
    py-1 
    bg-accent 
    rounded-sm
    text-primary 
  `}

  p {
    ${tw`
      ml-2
    `}
  }
`;
