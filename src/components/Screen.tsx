import {Box, Input} from 'native-base';
import React from 'react';

const Screen = ({value, onChange}: ScreenProps) => {
  return (
    <Box>
      <Input bg={'white'} fontSize={'2xl'} mt={16} h={16} {...{value}} onChangeText={onChange} />
    </Box>
  );
};

export default Screen;

type ScreenProps = {
  value: string;
  onChange: (value: string) => void;
};
