import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import { StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface SignupSuccessProps {}

const SignupSuccess = (props: SignupSuccessProps) => {
  const navigation = useNavigation();
  const isSuccessfulSignup = true; // this will come from Redux

  return (
    <AuthScreenWrapper
      title='Success! Account Created!'
      ctaTitle='Get Started'
      ctaCallback={() => {}} // will dispatch an action here
    >
      {isSuccessfulSignup ? (
        <>
          <Ionicons name='checkmark-circle' size={64} color={'green'} />
          <Text style={styles.verificationStatusText}>You're all set!</Text>
        </>
      ) : (
        <>
          <Ionicons name='sync' size={64} color='#2f2e41' />
          <Text style={styles.verificationStatusText}>
            Something went wrong.
          </Text>
        </>
      )}
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
