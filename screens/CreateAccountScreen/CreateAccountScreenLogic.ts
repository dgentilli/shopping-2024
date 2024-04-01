import { useState } from 'react';

export const useCreateAccountLogic = () => {
  const [email, setEmail] = useState('');

  return { email, setEmail };
};
