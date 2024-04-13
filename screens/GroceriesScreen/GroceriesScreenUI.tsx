import { View, Text } from 'react-native';
import List from '../../components/ListComponents/List';
import { ListItemType } from '../../constants/listItemType';

interface GroceriesScreenProps {
  data: ListItemType[];
}

const GroceriesScreenUI = (props: GroceriesScreenProps) => {
  const { data } = props;

  return (
    <View>
      <List data={data} />
    </View>
  );
};

export default GroceriesScreenUI;
