import { Text, TextInput, StyleSheet } from 'react-native';
import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import Spacer from '../../baseComponents/Spacer';
import Link from '../../baseComponents/Link';
import { useNavigation } from '@react-navigation/native';
import { AuthError } from '../../constants/errorTypes';
interface CreateAccountScreenProps {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  authError: AuthError | null;
  setEmail: (input: string) => void;
  setPassword: (input: string) => void;
  onPressCreateAccount: () => void;
  validateEmailField: (email: string) => void;
  validatePasswordField: (password: string) => void;
}

const CreateAccount = (props: CreateAccountScreenProps) => {
  const {
    email,
    password,
    emailError,
    authError,
    passwordError,
    onPressCreateAccount,
    setEmail,
    setPassword,
    validateEmailField,
    validatePasswordField,
  } = props;
  const navigation = useNavigation<any>();
  // To Do: Set up the TS for the navigation

  const isButtonDisabled = () => {
    if (email.length && password.length && !emailError && !passwordError) {
      return false;
    }

    return true;
  };

  return (
    <AuthScreenWrapper
      title='Create Account'
      ctaTitle='Next'
      isButtonDisabled={isButtonDisabled()}
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
        onEndEditing={(event) => validateEmailField(event.nativeEvent.text)}
      />

      <Text style={[styles.label, styles.errorText]}>{emailError}</Text>

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
        onEndEditing={(event) => validatePasswordField(event.nativeEvent.text)}
      />

      <Text style={[styles.label, styles.errorText]}>{passwordError}</Text>

      <Spacer height={25} />

      <Link
        text='Already Signed Up?'
        onPress={() => navigation.navigate('Signin')}
      />

      <Spacer height={25} />

      <Text style={[styles.label, styles.errorText]}>{authError?.message}</Text>
    </AuthScreenWrapper>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: '#2f2e41',
  },
  errorText: {
    color: '#f70835',
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
