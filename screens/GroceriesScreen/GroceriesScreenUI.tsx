import List from '../../components/ListComponents/List';
import ListScreenWrapper from '../../components/ListComponents/ListScreenWrapper';
import { ListItemType } from '../../constants/listItemType';

interface GroceriesScreenProps {
  data: ListItemType[];
  deleteItem: (id: string, type: 'grocery' | 'pharmacy') => void;
}

const GroceriesScreenUI = (props: GroceriesScreenProps) => {
  const { data, deleteItem } = props;

  return (
    <ListScreenWrapper title='Grocery' type='grocery'>
      <List data={data} deleteItem={deleteItem} />
    </ListScreenWrapper>
  );
};

export default GroceriesScreenUI;
