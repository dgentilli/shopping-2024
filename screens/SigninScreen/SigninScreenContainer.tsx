import React, { useEffect, useState } from 'react';
import SigninScreenUI from './SigninScreenUI';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
const MemoizedSignupScreenUI = React.memo(SigninScreenUI);

const SigninScreenContainer = () => {
  const { signinWithEmailAndPassword, currentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();
  // To Do: Add TS to the navigation
  const onPressLink = () => {
    navigation.navigate('Signup');
  };

  const onPressCtaButton = () => {
    try {
      signinWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('error from signin screen', error);
    }
  };

  useEffect(() => {
    // To Do: implement the logic for switching to the Main Navigator
    console.log('currentUser from signin', currentUser);
  }, []);

  return (
    <MemoizedSignupScreenUI
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onPressCtaButton={onPressCtaButton}
      onPressLink={onPressLink}
    />
  );
};

export default SigninScreenContainer;
