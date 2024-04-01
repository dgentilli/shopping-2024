import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { SignupStep } from '../../constants/signup';
import Button from '../Button';
import { ButtonTypes } from '../../constants/buttonTypes';

interface CreateAccountScreenProps {
  setStep: (step: SignupStep) => void;
}

const CreateAccount = (props: CreateAccountScreenProps) => {
  const { setStep } = props;
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.breaker} />

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

      <View style={styles.breaker} />

      <Button
        type={ButtonTypes.PRIMARY}
        title='Next'
        onPress={() => setStep(SignupStep.VERIFY_EMAIL)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    color: '#2f2e41',
  },
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
  breaker: {
    height: 75,
    width: '100%',
  },
});

export default CreateAccount;
