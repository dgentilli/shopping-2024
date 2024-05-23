import React, { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
  setDoc,
} from 'firebase/firestore';
import 'react-native-get-random-values'; // Must be imported before uuid
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../App';
import SignupScreenUI from './SignupScreenUI';
import useAuth from '../../hooks/useAuth';
import { SignupStep } from '../../constants/signup';
import useAppState from '../../hooks/useAppState';
import Validator from '../../services/Validator';

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
  console.log('householdCode', householdCode);

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
      console.log('no user');
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

      if (!householdCode || householdCode.length < 1) {
        const householdData = {
          shareCode: uuidv4(),
          userIds: [currentUser?.uid],
          listId: [],
        };

        const householdRef = await addDoc(collection(db, 'households'), {
          householdData,
        });

        householdId = householdRef.id;
        userData.householdId = householdId;
        const userRef = doc(db, 'users', currentUser.uid);
        const updatedUser = await setDoc(userRef, userData);
        setStep(SignupStep.SIGNUP_SUCCESS);
        console.log('updatedUser - new household', updatedUser);
        return;
      }

      const householdRef = collection(db, 'households');

      const q = query(
        householdRef,
        where('householdData.shareCode', '==', householdCode)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        console.log('query snapshot is NOT empty !!!!!!!');
        querySnapshot.forEach((doc) => {
          console.log('doc from querySnapshot', doc);
          const testData = doc.data();
          console.log('testData,,,,,,', testData);
          console.log('doc.data().id', doc.id);
          householdId = doc.id;
        });
      } else {
        console.log('existing household else block - there is a problem');
        setHouseholdError('There was a problem creating your household');
      }

      if (householdId) {
        userData.householdId = householdId;
        const userRef = doc(db, 'users', currentUser.uid);
        const updatedUser = await setDoc(userRef, userData);
        console.log('updatedUser', updatedUser);
        setStep(SignupStep.SIGNUP_SUCCESS);
        return;
      }

      return;
    } catch (error) {
      console.error('error from onSelectHousehold', error);
      setHouseholdError('Invalid Household Code');
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
    />
  );
};

export default SignupScreenContainer;

/**
 * Pass the set household code prop
 * Improve the generate share code func to check if the code is already used
 * Improve the logic - once the household as either been created / added
 * Navigate to the next screen
 * Handle errors
 * clean up code
 */

/**
 * Case add user to existing householf
 * Currently doesn't work
 * The conditional logic in your function is correct
 * so it has to be a problem with how you are updating the database
 *
 * After you solve that problem
 * Re-test flows
 * Handle errors
 * Clean up code
 */
