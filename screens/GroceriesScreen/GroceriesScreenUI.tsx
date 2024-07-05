import List from '../../components/ListComponents/List';
import ListScreenWrapper from '../../components/ListComponents/ListScreenWrapper';
import { ListItemType } from '../../constants/listItemType';

interface GroceriesScreenProps {
  data: ListItemType[];
  error: string;
  isLoading: boolean;
  deleteItem: (item: ListItemType) => void;
}

const GroceriesScreenUI = (props: GroceriesScreenProps) => {
  const { data, error, isLoading, deleteItem } = props;

  return (
    <ListScreenWrapper title='Grocery' type='grocery'>
      <List
        data={data}
        error={error}
        isLoading={isLoading}
        deleteItem={deleteItem}
      />
    </ListScreenWrapper>
  );
};

export default GroceriesScreenUI;
