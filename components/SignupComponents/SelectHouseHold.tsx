import { SignupStep } from '../../constants/signup';
import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import { StyleSheet, Text, TextInput } from 'react-native';
import { useState } from 'react';
import Spacer from '../../baseComponents/Spacer';
import ParagraphText from '../../baseComponents/ParagraphText';

interface SelectHouseholdProps {
  setStep: (step: SignupStep) => void;
}

const SelectHousehold = (props: SelectHouseholdProps) => {
  const { setStep } = props;
  const [householdCode, sethouseholdCode] = useState('');

  return (
    <AuthScreenWrapper
      title='Select Household'
      ctaTitle='Next'
      ctaCallback={() => setStep(SignupStep.SIGNUP_SUCCESS)}
    >
      <Text style={styles.secondaryTitle}>Joining an existing household?</Text>

      <Spacer height={20} />

      <Text style={styles.label}>Enter the code here</Text>

      <TextInput
        style={styles.input}
        value={householdCode}
        placeholder='Household Code'
        placeholderTextColor='#3f3d56'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(input) => sethouseholdCode(input)}
      />

      <Spacer height={30} />

      <ParagraphText>If you don't have a code, don't worry.</ParagraphText>

      <ParagraphText>
        Just press Next to create your own new household
      </ParagraphText>
    </AuthScreenWrapper>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: '#2f2e41',
  },
  secondaryTitle: {
    fontSize: 20,
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

export default SelectHousehold;
