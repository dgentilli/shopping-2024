import { useEffect, useState } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { SignupStep } from '../../constants/signup';
import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import Spacer from '../../baseComponents/Spacer';
import Link from '../../baseComponents/Link';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
interface CreateAccountScreenProps {
  setStep: (step: SignupStep) => void;
}

const CreateAccount = (props: CreateAccountScreenProps) => {
  const { setStep } = props;
  const { signupWithEmailAndPassword, currentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();
  // To Do: Set up the TS for the navigation
  console.log('email from createAccount', email);
  console.log('password from create account', password);

  useEffect(() => {
    console.log('currentUser from createAccount', currentUser);
    if (currentUser) {
      setStep(SignupStep.VERIFY_EMAIL);
    }
  }, [currentUser]);

  const onPressCtaButton = async () => {
    try {
      signupWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('error from signup');
    }
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

      <Spacer height={25} />

      <Link
        text='Already Signed Up?'
        onPress={() => navigation.navigate('Signin')}
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
