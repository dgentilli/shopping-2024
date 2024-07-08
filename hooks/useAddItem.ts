import { useState } from 'react';
import useAuth from './useAuth';
import { ValueType } from 'react-native-dropdown-picker';
import { v4 as uuidv4 } from 'uuid';
import { unitsOfMeasure } from '../constants/unitsOfMeasure';
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../App';
import { SheetManager } from 'react-native-actions-sheet';

type Props = {
  type: 'grocery' | 'pharmacy' | 'private';
};

const useAddItem = (type: Props) => {
  const { type: listType } = type;
  const { currentUser } = useAuth();
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [unitOfMeasure, setUnitOfMeasure] = useState<ValueType | null>(
    unitsOfMeasure[0].value
  );
  const [formError, setFormError] = useState('');

  const addHouseholdItem = async () => {
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
      [`lists.${listType}`]: arrayUnion({
        id: uuidv4(),
        itemName,
        itemQuantity,
        unitOfMeasure,
      }),
    });
    SheetManager.hide('add-item-sheet');
  };

  return {
    itemName,
    itemQuantity,
    isDropdownOpen,
    unitOfMeasure,
    formError,
    setItemName,
    setItemQuantity,
    setIsDropdownOpen,
    setUnitOfMeasure,
    setFormError,
    addHouseholdItem,
  };
};

export default useAddItem;
