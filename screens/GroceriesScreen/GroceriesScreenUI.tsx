import { useEffect } from 'react';
import AddItem from '../../components/AddItemComponents/AddItem';
import List from '../../components/ListComponents/List';
import ListScreenWrapper from '../../components/ListComponents/ListScreenWrapper';
import { ListItemType } from '../../constants/listItemType';
import { SheetManager } from 'react-native-actions-sheet';

interface GroceriesScreenProps {
  data: ListItemType[];
  newItem: string;
  setNewItem: (item: string) => void;
  deleteItem: (id: string, type: 'grocery' | 'pharmacy') => void;
}

const GroceriesScreenUI = (props: GroceriesScreenProps) => {
  const { data, newItem, setNewItem, deleteItem } = props;

  return (
    <ListScreenWrapper newItem={newItem} setNewItem={setNewItem}>
      <List data={data} deleteItem={deleteItem} />
    </ListScreenWrapper>
  );
};

export default GroceriesScreenUI;
