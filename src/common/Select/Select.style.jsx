import tw, { styled } from 'twin.macro';

export const SingleSelectWrapper = styled.div`
  ${tw`
    flex
    items-center
    font-primary 
  `}
  .react-select-container{
    ${({ wider }) => (wider ? tw`w-40 md:w-52` : tw`w-48`)}
  }
  
  /* If searchable */
  .react-select__input-container{
    ${tw`
      text-accent
    `}
  }
  .react-select__control{
    ${tw`
      bg-transparent 
      shadow-none
      border-2
      border-opacity-40
      border-opacity-100 
      border-accent
      hover:(border-accent)
      rounded-none
    `}
  }
  .react-select__control--is-focused{
    ${tw`
      border-accent
      hover:border-accent
    `}
    /* arrow */
    .react-select__indicators svg{
      ${tw`
        text-accent
        opacity-100
      `}
    }
  }
  /* Shown value */
  .react-select__single-value{
    ${tw`
      capitalize
      text-accent
    `}
  }
  /* line between option and arrow */
  .react-select__indicator-separator{
    display: none;
  }
  /* Arrow */
  .react-select__indicators svg{
    ${tw`
      fill-current 
      text-accent
      opacity-40
    `} 
  }
  /* Items */
  .react-select__menu{
    ${tw`
      overflow-hidden
      border-2
      border-accent
      bg-primary
      rounded-none
    `}
  }
  .react-select__menu-list{
    ${tw`
      p-0
    `}
  }
  /* Focused */
  .react-select__option.react-select__option--is-focused,
  .react-select__option:active{
    ${tw`
      bg-accent-hover
      text-primary
    `}
  }
  /* Active */
  .react-select__option.react-select__option--is-selected{
    ${tw`
      bg-accent
      text-primary  
    `}
  }
  .react-select__option{
    ${tw`
      capitalize 
    `}
  }
  .react-select__option--is-focused{
    ${tw`
    `}
  }
  .react-select__option--is-selected{
    ${tw`
    `}
  }
  /* No options */
  .react-select__menu-notice.react-select__menu-notice--no-options{
    ${tw`
      text-accent 
    `}
  }
`;
