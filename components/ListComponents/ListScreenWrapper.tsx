import { StyleSheet, TextInput, View } from 'react-native';
import Spacer from '../../baseComponents/Spacer';
import Button from '../../baseComponents/Button';
import { ButtonTypes } from '../../constants/buttonTypes';

interface ListScreenWrapperProps {
  newItem: string;
  children: any;
  setNewItem: (input: string) => void;
}

const ListScreenWrapper = (props: ListScreenWrapperProps) => {
  const { children, newItem, setNewItem } = props;
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

      {children}
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

export default ListScreenWrapper;
