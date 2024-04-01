import { View, Text } from 'react-native';
import { SignupStep } from '../../constants/signup';

interface SelectHouseholdProps {
  setStep: (step: SignupStep) => void;
}

const SelectHousehold = (props: SelectHouseholdProps) => {
  const { setStep } = props;

  return (
    <View>
      <Text>SelectHousehold</Text>
    </View>
  );
};

export default SelectHousehold;
