import React from 'react';
import {Button, Icon, IconButton, Text, useColorMode} from 'native-base';
import {ButtonProps} from '../types/ButtonProps';
import {useColors} from '../theme/colors';

const TButton = ({title, onPress, type}: ButtonProps) => {
  const {primaryBgColor, primaryTextColor} = useColors();
  return type === 'text' ? (
    <Button
      mx={4}
      _text={{
        color: primaryTextColor,
        fontSize: '3xl',
      }}
      bgColor={primaryBgColor}
      flex={1}
      h={16}
      {...{onPress}}>
      {title}
    </Button>
  ) : (
    <IconButton
      mx={4}
      bgColor={primaryBgColor}
      color={primaryTextColor}
      flex={1}
      h={16}
      {...{onPress}}
      icon={<Icon as={title} />}
    />
  );
};

export default TButton;
