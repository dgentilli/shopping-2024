import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import Spacer from '../../baseComponents/Spacer';
import Button from '../../baseComponents/Button';
import { ButtonTypes } from '../../constants/buttonTypes';
import Link from '../../baseComponents/Link';
import CountButton from '../../baseComponents/CountButton';

interface AddItemProps {
  title?: string;
}

const AddItem = (props: AddItemProps) => {
  const { title = 'Add a New Item' } = props;
  const [newItem, setNewItem] = useState('');

  return (
    <ActionSheet headerAlwaysVisible containerStyle={styles.container}>
      <Spacer height={40} />
      <Text style={styles.title}>{title}</Text>
      <Spacer height={20} />
      <TextInput
        style={styles.input}
        value={newItem}
        placeholder='Add an Item'
        placeholderTextColor='#3f3d56'
        autoCapitalize='words'
        autoCorrect={false}
        onChangeText={(input: string) => setNewItem(input)}
      />
      <Spacer height={20} />
      <CountButton count={1} increment={() => {}} decrement={() => {}} />
      <Spacer height={20} />
      <View style={styles.buttonContainer}>
        <Button
          type={ButtonTypes.PRIMARY}
          title='Save Item'
          onPress={() => {}}
        />
        <Spacer height={20} />
        <Link
          text='Cancel'
          onPress={() => SheetManager.hide('add-item-sheet')}
        />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '90%',
    paddingHorizontal: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'column',
  },
  input: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
    width: '100%',
    borderRadius: 6,
    padding: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#6c63ff',
  },
  buttonContainer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
});

export default AddItem;
