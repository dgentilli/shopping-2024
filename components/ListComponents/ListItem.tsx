import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ListItemType } from '../../constants/listItemType';

interface ListItemProps extends ListItemType {
  deleteItem: (item: ListItemType) => void;
}

const ListItem = (props: ListItemProps) => {
  const { id, itemName, itemQuantity, unitOfMeasure, deleteItem } = props;

  return (
    <View key={id} style={styles.listItemWrapper}>
      <Text style={[styles.textStyle, { flex: 1 }]}>{itemName}</Text>
      <View style={styles.middleColumn}>
        <Text style={styles.textStyle}>{`${itemQuantity} `}</Text>
        <Text style={styles.textStyle}>{unitOfMeasure}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
        onPress={() =>
          deleteItem({ id, itemName, itemQuantity, unitOfMeasure })
        }
      >
        <Ionicons name='trash' size={24} color='red' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    paddingHorizontal: 20,
  },
  textStyle: {
    fontSize: 20,
    color: '#2f2e41',
  },
  middleColumn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default ListItem;
