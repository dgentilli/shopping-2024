import { Pressable, StyleSheet, Text } from 'react-native';
import { ListItemType } from '../../constants/listItemType';

interface ListItemProps extends ListItemType {
  deleteItem: (id: string, type: 'grocery' | 'pharmacy') => void;
}

const ListItem = (props: ListItemProps) => {
  const { id, itemName, itemQuantity, isChecked, type, deleteItem } = props;

  return (
    <Pressable
      key={id}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.listItemWrapper,
      ]}
      onLongPress={() => deleteItem(id, type)}
    >
      <Text style={styles.textStyle}>{itemName}</Text>
      <Text style={styles.textStyle}>{itemQuantity}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    paddingHorizontal: 40,
  },
  textStyle: {
    fontSize: 20,
    color: '#2f2e41',
  },
});

export default ListItem;
