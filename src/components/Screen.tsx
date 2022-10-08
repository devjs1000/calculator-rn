import {Box, Input} from 'native-base';
import React from 'react';
import { ScreenProps } from './types/ScreenProps';

const Screen = ({value, onChange}: ScreenProps) => {
  return (
    <Box>
      <Input isReadOnly bg={'white'} fontSize={'2xl'} mt={16} h={16} {...{value}} onChangeText={onChange} />
    </Box>
  );
};

export default Screen;



