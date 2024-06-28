import React, { useCallback, useEffect, useState } from 'react';
import PharmacyScreenUI from './PharmacyScreenUI';
import { ListItemType } from '../../constants/listItemType';
import useAuth from '../../hooks/useAuth';
import {
  arrayRemove,
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../App';

const MemoizedPharmacyScreenUI = React.memo(PharmacyScreenUI);

const PharmacyScreenContainer = () => {
  const { currentUser } = useAuth();
  const [data, setData] = useState<ListItemType[]>([]);
  const [error, setError] = useState('');
  const [householdId, setHouseholdId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;

      const householdsRef = collection(db, 'households');
      const querySnapshot = await getDocs(householdsRef);
      const userHousehold = querySnapshot.docs.find((doc) => {
        const data = doc.data();
        return data.householdData.userIds.includes(currentUser.uid);
      });

      if (!userHousehold) return;
      setHouseholdId(userHousehold.id);

      const unsub = onSnapshot(
        doc(db, 'households', userHousehold.id),
        (doc) => {
          if (doc.exists()) {
            const householdData = doc.data();
            const listData = householdData.lists?.pharmacy || [];
            setData(listData);
          } else {
            setError(
              'There was a problem retrieving your list. Please try again'
            );
          }
        }
      );

      return () => unsub();
    };

    fetchData();
  }, [currentUser]);

  const deleteItem = useCallback(async (item: ListItemType) => {
    console.log('id recd by deleteItem function', item);
    const householdRef = doc(db, 'households', householdId);

    try {
      await updateDoc(householdRef, {
        'lists.pharmacy': arrayRemove(item),
      });
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }, []);

  return (
    <MemoizedPharmacyScreenUI
      data={data}
      error={error}
      deleteItem={deleteItem}
    />
  );
};

export default PharmacyScreenContainer;
