import {useColorModeValue} from 'native-base';

export const useColors = () => {
  const primaryBgColor = useColorModeValue('white', 'gray.800');
  const primaryTextColor = useColorModeValue( 'primary.500', 'gray.300');
  return {primaryBgColor, primaryTextColor};
};
