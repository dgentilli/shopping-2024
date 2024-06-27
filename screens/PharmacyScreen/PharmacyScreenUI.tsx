import { ListItemType } from '../../constants/listItemType';
import List from '../../components/ListComponents/List';
import ListScreenWrapper from '../../components/ListComponents/ListScreenWrapper';

interface PharmacyScreenProps {
  data: ListItemType[];
  deleteItem: (id: string, type: 'grocery' | 'pharmacy') => void;
}

const PharmacyScreenUI = (props: PharmacyScreenProps) => {
  const { data, deleteItem } = props;

  return (
    <ListScreenWrapper title='Pharmacy' type='pharmacy'>
      <List data={data} deleteItem={deleteItem} />
    </ListScreenWrapper>
  );
};

export default PharmacyScreenUI;
