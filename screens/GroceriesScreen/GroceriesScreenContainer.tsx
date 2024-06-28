import React, { useCallback, useEffect, useState } from 'react';
import GroceriesScreenUI from './GroceriesScreenUI';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
  arrayRemove,
} from 'firebase/firestore';
import { db } from '../../App';
import useAuth from '../../hooks/useAuth';
import { ListItemType } from '../../constants/listItemType';

const MemoizedGroceriesScreenUI = React.memo(GroceriesScreenUI);

const GroceriesScreenContainer = () => {
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
            const listData = householdData.lists?.grocery || [];
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

  const deleteItem = useCallback(
    async (item: ListItemType) => {
      const householdRef = doc(db, 'households', householdId);

      try {
        await updateDoc(householdRef, {
          'lists.grocery': arrayRemove(item),
        });
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
    [householdId]
  );

  return (
    <MemoizedGroceriesScreenUI
      data={data}
      error={error}
      deleteItem={deleteItem}
    />
  );
};

export default GroceriesScreenContainer;
