import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const ShowcaseWrapper = styled(Wrapper)`
  ${tw`
    py-10
  `}

  
  .my-masonry-grid {
    ${tw`
      flex 
      ml-[-20px]  
      w-[calc(100% + 20px)]
    `}
  }
  .my-masonry-grid_column {
    ${tw`
      pl-[20px]
      bg-clip-padding 
      flex 
      flex-col 
      gap-y-5
    `}
  }
  /* Style your items */
  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    ${tw`
      mb-[20px]
    `}
  }
`;
