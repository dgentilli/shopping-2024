import Ionicons from '@expo/vector-icons/Ionicons';
import { SignupStep } from '../../constants/signup';
import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import { StyleSheet, Text, View } from 'react-native';
import Spacer from '../../baseComponents/Spacer';

interface VerifyEmailScreenProps {
  isEmailVerified: boolean;
  setStep: (step: SignupStep) => void;
}

const VerifyEmail = (props: VerifyEmailScreenProps) => {
  const { isEmailVerified, setStep } = props;

  const renderStatusElements = () => {
    if (isEmailVerified) {
      return (
        <>
          <Ionicons name='checkmark-circle' size={64} color={'green'} />
          <Spacer height={20} />
          <Text style={styles.verificationStatusText}>Email Verified!</Text>
        </>
      );
    }
    return (
      <>
        <Ionicons name='sync' size={64} color='#2f2e41' />
        <Spacer height={20} />
        <Text style={styles.verificationStatusText}>
          Awaiting Email Verification
        </Text>
      </>
    );
  };

  return (
    <AuthScreenWrapper
      title='Verify Email'
      ctaTitle='Next'
      isButtonDisabled={!isEmailVerified}
      ctaCallback={() => setStep(SignupStep.SELECT_HOUSEHOLD)}
    >
      <View style={styles.verificationStatusWrapper}>
        {renderStatusElements()}
      </View>
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

export default VerifyEmail;
