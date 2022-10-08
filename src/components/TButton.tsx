import React from 'react';
import {Button, Text} from 'native-base';

const TButton = ({title, onPress}: ButtonProps) => {
  return (
    <Button mx={4} _text={{
      color: 'primary.500',
      fontSize: '3xl',
    }}
    bg={'white'}
    flex={1} h={16} {...{onPress}}>
      {title}
    </Button>
  );
};

export default TButton;

type ButtonProps = {
  title: string;
  onPress: () => void;
};
