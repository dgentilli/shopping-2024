import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SignupStep } from '../../constants/signup';
import Button from '../Button';
import ScreenWrapper from '../../baseComponents/ScreenWrapper';
import Spacer from '../../baseComponents/Spacer';
import { ButtonTypes } from '../../constants/buttonTypes';

interface CreateAccountScreenProps {
  setStep: (step: SignupStep) => void;
}

const CreateAccount = (props: CreateAccountScreenProps) => {
  const { setStep } = props;
  const [email, setEmail] = useState('');

  return (
    <ScreenWrapper
      title='Create Account'
      ctaTitle='Next'
      ctaCallback={() => setStep(SignupStep.VERIFY_EMAIL)}
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
    </ScreenWrapper>
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
