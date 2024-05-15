import React, { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { uuid } from 'uuidv4';
import { db } from '../../App';
import SignupScreenUI from './SignupScreenUI';
import useAuth from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { SignupStep } from '../../constants/signup';
import useAppState from '../../hooks/useAppState';
import Validator from '../../services/Validator';
// import { User } from '../../models/firestore';

const SHARE_CODE_LENGTH = 8;

const MemoizedSignupScreenUI = React.memo(SignupScreenUI);

const SignupScreenContainer = () => {
  const [step, setStep] = useState(SignupStep.CREATE_ACCOUNT);
  const {
    currentUser,
    isEmailVerified,
    authError,
    signupWithEmailAndPassword,
    checkEmailVerificationStatus,
  } = useAuth();
  const { currentAppState, onForeground } = useAppState();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [householdCode, sethouseholdCode] = useState('');
  const [householdError, setHouseholdError] = useState('');
  const navigation = useNavigation<any>();

  const onPressCreateAccount = async () => {
    try {
      signupWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('error from signup');
    }
  };

  const validateEmailField = (email: string) => {
    setEmailError(Validator.validateEmailAddress(email));
  };

  const validatePasswordField = (password: string) => {
    setPasswordError(Validator.validatePassword(password));
  };

  const generateShareCode = () => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    console.log('chars from generate code', chars);
    let result = '';
    for (let i = 0; i < SHARE_CODE_LENGTH; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const onSelectHousehold = async (householdCode: string) => {
    if (!currentUser) return;
    try {
      let householdId;
      if (!householdCode || householdCode.length < 1) {
        const householdData = {
          id: uuid(),
          shareCode: generateShareCode(),
          userIds: [currentUser?.uid],
          listId: [],
        };

        const householdRef = await addDoc(
          collection(db, 'households'),
          householdData
        );
        householdId = householdRef.id;
        const updatedUser = await updateDoc(currentUser as any, {
          householdId,
        });
        console.log('updatedUser - new household', updatedUser);
        return;
      }

      const householdsRef = collection(db, 'households');
      const q = query(householdsRef, where('shareCode', '==', householdCode));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          console.log('doc from querySnapshot', doc);
          householdId = doc.data().id;
        });
      } else {
        setHouseholdError('Invalid Household');
      }

      if (householdId) {
        const updatedUser = await updateDoc(currentUser as any, {
          householdId,
        });
        console.log('updatedUser - existing household', updatedUser);
      }
      return;
    } catch (error) {
      console.error('error from onSelectHousehold', error);
    }
  };

  useEffect(() => {
    if (step === SignupStep.CREATE_ACCOUNT && Boolean(currentUser)) {
      setStep(SignupStep.VERIFY_EMAIL);
    }
  }, [currentUser]);

  useEffect(() => {
    const handleForeground = () => {
      checkEmailVerificationStatus();
    };
    const unsubscribe = onForeground(handleForeground);

    return () => unsubscribe;
  }, [currentAppState]);

  return (
    <MemoizedSignupScreenUI
      step={step}
      email={email}
      password={password}
      isEmailVerified={isEmailVerified}
      emailError={emailError}
      authError={authError}
      passwordError={passwordError}
      setStep={setStep}
      setEmail={setEmail}
      setPassword={setPassword}
      onPressCreateAccount={onPressCreateAccount}
      validateEmailField={validateEmailField}
      validatePasswordField={validatePasswordField}
    />
  );
};

export default SignupScreenContainer;
