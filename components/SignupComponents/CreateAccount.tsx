import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Text, TextInput, StyleSheet } from 'react-native';
import { SignupStep } from '../../constants/signup';
import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import Spacer from '../../baseComponents/Spacer';

interface CreateAccountScreenProps {
  setStep: (step: SignupStep) => void;
}

const CreateAccount = (props: CreateAccountScreenProps) => {
  const { setStep } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('email from createAccount', email);
  console.log('password from create account', password);

  const auth = getAuth();

  const onPressCtaButton = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('user from createUserWithEmailAndPassword', user);
        setStep(SignupStep.VERIFY_EMAIL);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode from signup', errorCode);
        console.log('errorMessage from signup', errorMessage);
        // ..
      });
  };

  return (
    <AuthScreenWrapper
      title='Create Account'
      ctaTitle='Next'
      ctaCallback={onPressCtaButton}
    >
      <Text style={styles.label}>Enter your email address</Text>

      <TextInput
        style={styles.input}
        value={email}
        keyboardType='email-address'
        placeholder='Email Address'
        placeholderTextColor='#3f3d56'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(input) => setEmail(input)}
      />

      <Spacer height={50} />

      <Text style={styles.label}>Enter a password</Text>

      <TextInput
        style={styles.input}
        value={password}
        placeholder='Password'
        placeholderTextColor='#3f3d56'
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(input) => setPassword(input)}
      />
    </AuthScreenWrapper>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: '#2f2e41',
  },
  input: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 6,
    padding: 10,
    textAlign: 'center',
  },
});

export default CreateAccount;
