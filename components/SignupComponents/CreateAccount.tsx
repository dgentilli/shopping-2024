import { useEffect, useState } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { SignupStep } from '../../constants/signup';
import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import Spacer from '../../baseComponents/Spacer';
import Link from '../../baseComponents/Link';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
interface CreateAccountScreenProps {
  email: string;
  password: string;
  setEmail: (input: string) => void;
  setPassword: (input: string) => void;
  onPressCreateAccount: () => void;
}

const CreateAccount = (props: CreateAccountScreenProps) => {
  const { email, password, onPressCreateAccount, setEmail, setPassword } =
    props;
  const navigation = useNavigation<any>();
  // To Do: Set up the TS for the navigation

  return (
    <AuthScreenWrapper
      title='Create Account'
      ctaTitle='Next'
      ctaCallback={onPressCreateAccount}
    >
      <Text style={styles.label}>Enter your email address</Text>

      <TextInput
        style={styles.input}
        value={email}
        inputMode='email'
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
