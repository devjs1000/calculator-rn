import {ReactElement} from 'react';

export type ButtonProps = {
  title: ReactElement | string;
  onPress: () => void;
  type: ButtonTypes;
};

type ButtonTypes = 'text' | 'icon' | any;
