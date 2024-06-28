import List from '../../components/ListComponents/List';
import ListScreenWrapper from '../../components/ListComponents/ListScreenWrapper';
import { ListItemType } from '../../constants/listItemType';

interface GroceriesScreenProps {
  data: ListItemType[];
  error: string;
  deleteItem: (id: string) => void;
}

const GroceriesScreenUI = (props: GroceriesScreenProps) => {
  const { data, error, deleteItem } = props;

  return (
    <ListScreenWrapper title='Grocery' type='grocery'>
      <List data={data} error={error} deleteItem={deleteItem} />
    </ListScreenWrapper>
  );
};

export default GroceriesScreenUI;
