import { Pressable, StyleSheet, Text } from 'react-native';
import { ListItemType } from '../../constants/listItemType';

const ListItem = (props: ListItemType) => {
  const { id, itemName, itemQuantity, isChecked } = props;

  return (
    <Pressable style={[styles.listItemWrapper]} onPress={() => {}}>
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
