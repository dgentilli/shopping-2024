import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import { StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
interface SignupSuccessProps {
  onCompleteSignup: () => void;
}

const SignupSuccess = (props: SignupSuccessProps) => {
  const { onCompleteSignup } = props;

  return (
    <AuthScreenWrapper
      title='Success! Account Created!'
      ctaTitle='Get Started'
      ctaCallback={onCompleteSignup}
    >
      <>
        <Ionicons name='checkmark-circle' size={64} color={'green'} />
        <Text style={styles.verificationStatusText}>You're all set!</Text>
      </>
    </AuthScreenWrapper>
  );
};

const styles = StyleSheet.create({
  verificationStatusWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verificationStatusText: {
    fontSize: 24,
    color: '#2f2e41',
  },
});

export default SignupSuccess;
