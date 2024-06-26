import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

interface AddItemProps {}

const AddItem = (props: AddItemProps) => {
  const [newItem, setNewItem] = useState('');

  return (
    <ActionSheet containerStyle={{ height: 300 }}>
      <TextInput
        style={styles.input}
        value={newItem}
        placeholder='Add an Item'
        placeholderTextColor='#3f3d56'
        autoCapitalize='words'
        autoCorrect={false}
        onChangeText={(input: string) => setNewItem(input)}
      />
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
    width: '100%',
    borderRadius: 6,
    padding: 10,
    textAlign: 'center',
  },
});

export default AddItem;
