import ListScreenWrapper from '../../components/ListComponents/ListScreenWrapper';
import List from '../../components/ListComponents/List';
import { ListItemType } from '../../constants/listItemType';

interface PrivateListScreenProps {
  data: ListItemType[];
  error: string;
  isLoading: boolean;
  deleteItem: (item: ListItemType) => void;
}

const PrivateListScreenUI = (props: PrivateListScreenProps) => {
  const { data, error, isLoading, deleteItem } = props;

  return (
    <ListScreenWrapper title='My Stuff' type='private'>
      <List
        data={data}
        error={error}
        isLoading={isLoading}
        deleteItem={deleteItem}
      />
    </ListScreenWrapper>
  );
};

export default PrivateListScreenUI;
