import { View } from 'react-native';
import { ListItemType } from '../../constants/listItemType';
import List from '../../components/ListComponents/List';

interface PharmacyScreenProps {
  data: ListItemType[];
  deleteItem: (id: string, type: 'grocery' | 'pharmacy') => void;
}

const PharmacyScreenUI = (props: PharmacyScreenProps) => {
  const { data, deleteItem } = props;

  return (
    <View>
      <List data={data} deleteItem={deleteItem} />
    </View>
  );
};

export default PharmacyScreenUI;
