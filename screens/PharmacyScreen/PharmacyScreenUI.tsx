import { View, Text } from 'react-native';
import { ListItemType } from '../../constants/listItemType';

interface PharmacyScreenProps {
  data: ListItemType[];
}

const PharmacyScreenUI = (props: PharmacyScreenProps) => {
  const { id, itemName, itemQuantity, isChecked } = props;

  return (
    <View>
      <Text>PharmacyScreenUI</Text>
    </View>
  );
};

export default PharmacyScreenUI;
