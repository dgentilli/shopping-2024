import { ListItemType } from '../../constants/listItemType';
import List from '../../components/ListComponents/List';
import ListScreenWrapper from '../../components/ListComponents/ListScreenWrapper';

interface PharmacyScreenProps {
  data: ListItemType[];
  error: string;
  isLoading: boolean;
  deleteItem: (item: ListItemType) => void;
}

const PharmacyScreenUI = (props: PharmacyScreenProps) => {
  const { data, error, isLoading, deleteItem } = props;

  return (
    <ListScreenWrapper title='Pharmacy' type='pharmacy'>
      <List
        data={data}
        error={error}
        isLoading={isLoading}
        deleteItem={deleteItem}
      />
    </ListScreenWrapper>
  );
};

export default PharmacyScreenUI;
