import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({variant,children}) => {
  return (
    <Alert variant={variant}>
        {variant}
    </Alert>
  );
}

Message.defaultProprs = {
    variant:'info',
}

export default Message;
