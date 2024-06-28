import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import Spacer from '../../baseComponents/Spacer';
import Button from '../../baseComponents/Button';
import { ButtonTypes } from '../../constants/buttonTypes';
import Link from '../../baseComponents/Link';
import CountButton from '../../baseComponents/CountButton';
import DropdownMenu from '../../baseComponents/DropdownMenu';
import { ValueType } from 'react-native-dropdown-picker';
import { unitsOfMeasure } from '../../constants/unitsOfMeasure';
import { AddItemSheetProps } from '../../sheets';
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../App';
import useAuth from '../../hooks/useAuth';

const AddItem = (props: AddItemSheetProps) => {
  const title = props.payload.title;
  const type = props.payload.type;
  const { currentUser } = useAuth();
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [unitOfMeasure, setUnitOfMeasure] = useState<ValueType | null>(
    unitsOfMeasure[0].value
  );
  const [formError, setFormError] = useState('');
  const sheetTitle = `Add a ${title} item`;

  const onPressSave = async () => {
    if (!itemName) return setFormError('Enter an item!');
    if (!currentUser) return setFormError('You must be logged in!');

    const householdsRef = collection(db, 'households');
    const querySnapshot = await getDocs(householdsRef);
    const userHousehold = querySnapshot.docs.find((doc) => {
      const data = doc.data();
      return data.householdData.userIds.includes(currentUser.uid);
    });

    if (!userHousehold) return;

    const updateRef = doc(db, 'households', userHousehold.id);
    await updateDoc(updateRef, {
      [`lists.${type}`]: arrayUnion({ itemName, itemQuantity, unitOfMeasure }),
    });
    SheetManager.hide('add-item-sheet');
  };

  return (
    <ActionSheet headerAlwaysVisible containerStyle={styles.container}>
      <Spacer height={40} />
      <Text style={styles.title}>{sheetTitle}</Text>
      <Spacer height={20} />
      <TextInput
        style={styles.input}
        value={itemName}
        placeholder='Add an Item'
        placeholderTextColor='#3f3d56'
        autoCapitalize='words'
        autoCorrect={false}
        onChangeText={(input: string) => setItemName(input)}
        onFocus={() => setFormError('')}
      />
      <Spacer height={40} />
      <View style={{ flexDirection: 'row' }}>
        <CountButton
          count={itemQuantity}
          increment={() => {
            setItemQuantity(itemQuantity + 1);
          }}
          decrement={() => {
            itemQuantity > 1 && setItemQuantity(itemQuantity - 1);
          }}
        />
        <View style={{ width: 10 }} />
        <View style={{ flex: 1 }}>
          <DropdownMenu
            isOpen={isDropdownOpen}
            items={unitsOfMeasure}
            value={unitOfMeasure}
            setValue={setUnitOfMeasure}
            setOpen={() => setIsDropdownOpen(!isDropdownOpen)}
          />
        </View>
      </View>
      <Spacer height={20} />
      <View style={styles.buttonContainer}>
        <Text style={styles.errorText}>{formError}</Text>
        <Button
          type={ButtonTypes.PRIMARY}
          title='Save Item'
          onPress={onPressSave}
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
    marginTop: 250,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 16,
  },
});

export default AddItem;
