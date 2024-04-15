import { View, Text } from 'react-native';
import List from '../../components/ListComponents/List';
import { ListItemType } from '../../constants/listItemType';

interface GroceriesScreenProps {
  data: ListItemType[];
  deleteItem: (id: string, type: 'grocery' | 'pharmacy') => void;
}

const GroceriesScreenUI = (props: GroceriesScreenProps) => {
  const { data, deleteItem } = props;

  return (
    <View>
      <List data={data} deleteItem={deleteItem} />
    </View>
  );
};

export default GroceriesScreenUI;
