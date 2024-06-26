import { StyleSheet, View } from 'react-native';
import Spacer from '../../baseComponents/Spacer';
import Button from '../../baseComponents/Button';
import { ButtonTypes } from '../../constants/buttonTypes';
import { SheetManager } from 'react-native-actions-sheet';

interface ListScreenWrapperProps {
  newItem: string;
  children: any;
  setNewItem: (input: string) => void;
}

const ListScreenWrapper = (props: ListScreenWrapperProps) => {
  const { children, newItem, setNewItem } = props;

  return (
    <View style={styles.wrapper}>
      <Spacer height={20} />
      {children}
      <Spacer height={20} />
      <Button
        type={ButtonTypes.PRIMARY}
        title='Add'
        onPress={() => SheetManager.show('add-item-sheet')}
      />
      <Spacer height={20} />
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
