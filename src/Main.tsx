import {Box, HStack, VStack} from 'native-base';
import React from 'react';
import Screen from './components/Screen';
import TButton from './components/TButton';

const Main = () => {
  const [value, setValue] = React.useState('0');

  const handleScreenChange = (value: string) => {
    setValue(value);
  };

  const handleButtonPress = (val: string) => {
    return () => {
      setValue(value + val);
    };
  };

  return (
    <Box position={'absolute'} w={'full'} bottom={'16'}>
      <Screen value={value} onChange={handleScreenChange} />
      <VStack mt={4} space={4} >
        <HStack>
          <TButton onPress={handleButtonPress('1')} title="1" />
          <TButton onPress={handleButtonPress('2')} title="2" />
          <TButton onPress={handleButtonPress('3')} title="3" />
          <TButton onPress={handleButtonPress('+')} title="+" />
        </HStack>
        <HStack>
          <TButton onPress={handleButtonPress('4')} title="4" />
          <TButton onPress={handleButtonPress('5')} title="5" />
          <TButton onPress={handleButtonPress('6')} title="6" />
          <TButton onPress={handleButtonPress('-')} title="-" />
        </HStack>
        <HStack>
          <TButton onPress={handleButtonPress('7')} title="7" />
          <TButton onPress={handleButtonPress('8')} title="8" />
          <TButton onPress={handleButtonPress('9')} title="9" />
          <TButton onPress={handleButtonPress('x')} title="x" />
        </HStack>
        <HStack>
          <TButton onPress={handleButtonPress('0')} title="0" />
          <TButton onPress={handleButtonPress('.')} title="." />
          <TButton onPress={handleButtonPress('=')} title="=" />
          <TButton onPress={handleButtonPress('/')} title="/" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Main;
