import { View, Text, TextInput, StyleSheet } from 'react-native';
import List from '../../components/ListComponents/List';
import { ListItemType } from '../../constants/listItemType';
import Spacer from '../../baseComponents/Spacer';
import Button from '../../baseComponents/Button';
import { ButtonTypes } from '../../constants/buttonTypes';

interface GroceriesScreenProps {
  data: ListItemType[];
  newItem: string;
  setNewItem: (item: string) => void;
  deleteItem: (id: string, type: 'grocery' | 'pharmacy') => void;
}

const GroceriesScreenUI = (props: GroceriesScreenProps) => {
  const { data, newItem, setNewItem, deleteItem } = props;

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        value={newItem}
        placeholder='Add an Item'
        placeholderTextColor='#3f3d56'
        autoCapitalize='words'
        autoCorrect={false}
        onChangeText={(input) => setNewItem(input)}
      />

      <Spacer height={20} />

      <Button type={ButtonTypes.PRIMARY} title='Add' onPress={() => {}} />

      <Spacer height={20} />

      <List data={data} deleteItem={deleteItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: '#2f2e41',
  },
  input: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 6,
    padding: 10,
    textAlign: 'center',
  },
});

export default GroceriesScreenUI;
