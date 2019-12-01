import React from 'react';

import {ButtonStyles} from './custom-button.styles';

const CustomButton = ({ children,...props }) => (
  <ButtonStyles
    {...props}
  >
    {children}
  </ButtonStyles>
);

export default CustomButton;
