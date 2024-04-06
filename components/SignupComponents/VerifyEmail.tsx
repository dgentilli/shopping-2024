import Ionicons from '@expo/vector-icons/Ionicons';
import { SignupStep } from '../../constants/signup';
import ScreenWrapper from '../../baseComponents/ScreenWrapper';
import { StyleSheet, Text, View } from 'react-native';
import Spacer from '../../baseComponents/Spacer';

interface VerifyEmailScreenProps {
  setStep: (step: SignupStep) => void;
}

const VerifyEmail = (props: VerifyEmailScreenProps) => {
  const { setStep } = props;
  const isVerified = true;

  const renderStatusElements = () => {
    if (isVerified) {
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

  const getButtonProps = () => {
    if (isVerified) {
      return {
        ctaTitle: 'Next',
        ctaCallback: () => setStep(SignupStep.SELECT_HOUSEHOLD),
      };
    }
    return {
      ctaTitle: 'Open Email App',
      ctaCallback: () => {},
    };
  };

  return (
    <ScreenWrapper title='Verify Email' {...getButtonProps()}>
      <View style={styles.verificationStatusWrapper}>
        {renderStatusElements()}
      </View>
    </ScreenWrapper>
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
