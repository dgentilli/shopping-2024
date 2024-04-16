import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';
import { ListItemType } from '../../constants/listItemType';
import EmptyList from '../../baseComponents/EmptyList';

interface ListProps {
  data: ListItemType[];
  deleteItem: (id: string, type: 'grocery' | 'pharmacy') => void;
}

const List = (props: ListProps) => {
  const { data, deleteItem } = props;

  const Divider = () => <View style={styles.itemSeparator} />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem {...item} deleteItem={deleteItem} />
        )}
        ItemSeparatorComponent={() => <Divider />}
        ListEmptyComponent={() => <EmptyList />}
        style={{ backgroundColor: '#ffffff' }}
      />
    </View>
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
