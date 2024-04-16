import { View } from 'react-native';
import { ListItemType } from '../../constants/listItemType';
import List from '../../components/ListComponents/List';
import ListScreenWrapper from '../../components/ListComponents/ListScreenWrapper';

interface PharmacyScreenProps {
  data: ListItemType[];
  newItem: string;
  setNewItem: (input: string) => void;
  deleteItem: (id: string, type: 'grocery' | 'pharmacy') => void;
}

const PharmacyScreenUI = (props: PharmacyScreenProps) => {
  const { data, newItem, setNewItem, deleteItem } = props;

  return (
    <ListScreenWrapper newItem={newItem} setNewItem={setNewItem}>
      <List data={data} deleteItem={deleteItem} />
    </ListScreenWrapper>
  );
};

export default PharmacyScreenUI;
