import React from 'react';

export function useUtilities(setValue: React.Dispatch<React.SetStateAction<string>>, value: string) {
  const handleScreenChange = (value: string) => {
    setValue(value);
  };

  const handleButtonPress = (val: string) => {
    return () => {
      setValue(value + val);
    };
  };

  const handleEvaluate = () => {
    try {
      setValue(eval(value).toString());
    } catch (e) {
      setValue('Error');
    }
  };

  const clearScreen = () => {
    setValue('0');
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };
  return { handleScreenChange, handleButtonPress, handleEvaluate, clearScreen, handleDelete };
}
