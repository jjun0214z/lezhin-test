import React, { ChangeEvent, useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = function (e: ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return { value, onChange };
};
