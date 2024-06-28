import { ListItemType } from '../../constants/listItemType';
import List from '../../components/ListComponents/List';
import ListScreenWrapper from '../../components/ListComponents/ListScreenWrapper';

interface PharmacyScreenProps {
  data: ListItemType[];
  error: string;
  deleteItem: (id: string) => void;
}

const PharmacyScreenUI = (props: PharmacyScreenProps) => {
  const { data, error, deleteItem } = props;

  return (
    <ListScreenWrapper title='Pharmacy' type='pharmacy'>
      <List data={data} error={error} deleteItem={deleteItem} />
    </ListScreenWrapper>
  );
};

export default PharmacyScreenUI;
