import React, { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import 'react-native-get-random-values'; // Must be imported before uuid
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../App';
import SignupScreenUI from './SignupScreenUI';
import useAuth from '../../hooks/useAuth';
import { SignupStep } from '../../constants/signup';
import useAppState from '../../hooks/useAppState';
import Validator from '../../services/Validator';
import useUserStore from '../../state/user';
import useHouseholdStore from '../../state/household';

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
  const { setIsSignupComplete } = useUserStore();
  const { setHouseHoldShareCode } = useHouseholdStore();

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

  const onSelectHousehold = async () => {
    if (!currentUser) {
      setHouseholdError('You must be a registered user');
      return;
    }

    try {
      let householdId;
      let userData: {
        uid: string;
        email: string | null;
        householdId?: string;
      } = {
        uid: currentUser.uid,
        email: currentUser.email,
      };

      if (!householdCode) {
        const householdData = {
          shareCode: uuidv4(),
          userIds: [currentUser?.uid],
          listId: [],
        };

        const householdRef = await addDoc(collection(db, 'households'), {
          householdData,
        });

        if (!householdRef) {
          console.error('Error setting the household');
        }

        setHouseHoldShareCode(householdData.shareCode);
        householdId = householdRef.id;
        userData.householdId = householdId;
        const userRef = doc(db, 'users', currentUser.uid);
        await setDoc(userRef, userData);
        setStep(SignupStep.SIGNUP_SUCCESS);
        return;
      }

      const householdRef = collection(db, 'households');

      const q = query(
        householdRef,
        where('householdData.shareCode', '==', householdCode)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          householdId = doc.id;
        });

        setHouseHoldShareCode(householdCode);
      } else {
        console.log('existing household else block - there is a problem');
        setHouseholdError('There was a problem creating your household');
      }

      if (householdId) {
        userData.householdId = householdId;
        const userRef = doc(db, 'users', currentUser.uid);
        await setDoc(userRef, userData);
        const householdDoc = doc(db, 'households', householdId);
        await updateDoc(householdDoc, {
          'householdData.userIds': arrayUnion(currentUser.uid),
        });
        setStep(SignupStep.SIGNUP_SUCCESS);
        return;
      }

      return;
    } catch (error) {
      console.error('error from onSelectHousehold', error);
      setHouseholdError('Invalid Household Code');
    }
  };

  const onCompleteSignup = () => {
    setIsSignupComplete(true);
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
      householdCode={householdCode}
      householdError={householdError}
      setStep={setStep}
      setEmail={setEmail}
      setPassword={setPassword}
      onPressCreateAccount={onPressCreateAccount}
      validateEmailField={validateEmailField}
      validatePasswordField={validatePasswordField}
      onSelectHousehold={onSelectHousehold}
      sethouseholdCode={sethouseholdCode}
      onCompleteSignup={onCompleteSignup}
    />
  );
};

export default SignupScreenContainer;
