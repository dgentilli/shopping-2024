import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';
import { ListItemType } from '../../constants/listItemType';
import EmptyList from '../../baseComponents/EmptyList';
import ParagraphText from '../../baseComponents/ParagraphText';

interface ListProps {
  data: ListItemType[];
  error: string;
  deleteItem: (id: string) => void;
}

const List = (props: ListProps) => {
  const { data, error, deleteItem } = props;

  const Divider = () => <View style={styles.itemSeparator} />;

  const renderContent = () => {
    if (error) {
      return <ParagraphText>{error}</ParagraphText>;
    } else {
      return (
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
      );
    }
  };

  return <View style={{ flex: 1 }}>{renderContent()}</View>;
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
