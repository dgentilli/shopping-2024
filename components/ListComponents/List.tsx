import { FlatList } from 'react-native';
import ListItem from './ListItem';
import { ListItemType } from '../../constants/listItemType';

interface ListProps {
  data: ListItemType[];
}

const List = (props: ListProps) => {
  const { data } = props;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem {...item} />}
      style={{ backgroundColor: '#ffffff' }}
    />
  );
};

export default List;
