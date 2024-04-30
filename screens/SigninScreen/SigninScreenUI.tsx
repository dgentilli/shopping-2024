import { Text, TextInput, StyleSheet } from 'react-native';
import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import Spacer from '../../baseComponents/Spacer';
import Link from '../../baseComponents/Link';
import { AuthError } from '../../constants/errorTypes';

interface SigninScreenProps {
  email: string;
  password: string;
  emailError: string;
  authError: AuthError | null;
  setEmail: (input: string) => void;
  setPassword: (input: string) => void;
  onPressLink: () => void;
  onPressCtaButton: () => void;
  validateEmailField: (input: string) => void;
}

const SigninScreenUI = (props: SigninScreenProps) => {
  const {
    email,
    password,
    emailError,
    authError,
    setEmail,
    setPassword,
    onPressLink,
    onPressCtaButton,
    validateEmailField,
  } = props;

  const isButtonDisabled = () => {
    if (email.length && password.length && !emailError) {
      return false;
    }

    return true;
  };

  return (
    <AuthScreenWrapper
      title='Sign In'
      ctaTitle='Sign in'
      isButtonDisabled={isButtonDisabled()}
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
      />

      <Spacer height={25} />

      <Link text='Need to Sign up?' onPress={onPressLink} />

      <Spacer height={25} />

      <Text style={[styles.label, styles.errorText]}>
        {authError?.code.slice(5)}
      </Text>
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

export default SigninScreenUI;
