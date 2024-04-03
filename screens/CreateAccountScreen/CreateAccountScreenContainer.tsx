import React from 'react';
import { useCreateAccountLogic } from './CreateAccountScreenLogic';
import CreateAccountScreenUI from './CreateAccountScreenUI';

const MemoizedCreateAccountScreenUI = React.memo(CreateAccountScreenUI);

const CreateAccountScreenContainer = () => {
  const { email, setEmail } = useCreateAccountLogic();

  return <MemoizedCreateAccountScreenUI email={email} setEmail={setEmail} />;
};

export default CreateAccountScreenContainer;
