import React from 'react';
import Link from '../../common/RouterLink';
import { NotFoundWrapper, Text, Message } from './NotFound.style';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Text>404</Text>
      <Message>Page Not Found</Message>
      <Message>
        <Link to="/">Back To Editor</Link>
      </Message>
    </NotFoundWrapper>
  );
};

export default NotFound;
