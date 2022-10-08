import {Box, Input} from 'native-base';
import React from 'react';
import {useColors} from '../theme/colors';
import {ScreenProps} from '../types/ScreenProps';

const Screen = ({value, onChange}: ScreenProps) => {
  const {primaryBgColor, primaryTextColor} = useColors();
  return (
    <Box>
      <Input
        color={primaryTextColor}
        variant={'unstyled'}
        isReadOnly
        bg={primaryBgColor}
        fontSize={'2xl'}
        mt={16}
        h={16}
        {...{value}}
        onChangeText={onChange}
      />
    </Box>
  );
};

export default Screen;
