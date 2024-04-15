import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';
import { ListItemType } from '../../constants/listItemType';
import EmptyList from '../../baseComponents/EmptyList';

interface ListProps {
  data: ListItemType[];
}

const List = (props: ListProps) => {
  // const { data } = props;
  const data = [];

  const Divider = () => <View style={styles.itemSeparator} />;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem {...item} />}
      ItemSeparatorComponent={() => <Divider />}
      ListEmptyComponent={() => <EmptyList />}
      style={{ height: '100%', backgroundColor: '#ffffff' }}
    />
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    height: 1,
    backgroundColor: '#e6e6e6',
    marginHorizontal: 40,
    opacity: 0.5,
  },
});

export default List;
