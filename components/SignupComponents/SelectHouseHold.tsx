import { View, Text } from 'react-native';
import { SignupStep } from '../../constants/signup';
import Button from '../Button';
import { ButtonTypes } from '../../constants/buttonTypes';

interface SelectHouseholdProps {
  setStep: (step: SignupStep) => void;
}

const SelectHousehold = (props: SelectHouseholdProps) => {
  const { setStep } = props;

  return (
    <View>
      <Text>SelectHousehold</Text>

      <Button
        type={ButtonTypes.PRIMARY}
        title='Next'
        onPress={() => setStep(SignupStep.SIGNUP_SUCCESS)}
      />
    </View>
  );
};

export default SelectHousehold;
