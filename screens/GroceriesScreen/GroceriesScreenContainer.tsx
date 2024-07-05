import React, { useCallback, useEffect, useState } from 'react';
import GroceriesScreenUI from './GroceriesScreenUI';
import { doc, onSnapshot, updateDoc, arrayRemove } from 'firebase/firestore';
import { db } from '../../App';
import useAuth from '../../hooks/useAuth';
import { ListItemType } from '../../constants/listItemType';
import useHousehold from '../../hooks/useHousehold';

const MemoizedGroceriesScreenUI = React.memo(GroceriesScreenUI);

const GroceriesScreenContainer = () => {
  const { currentUser } = useAuth();
  const { householDocId, household } = useHousehold(currentUser?.uid || '');
  const [data, setData] = useState<ListItemType[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setError('');
    let unsub: () => void;

    if (!currentUser || !householDocId || !household) return;

    const fetchData = () => {
      unsub = onSnapshot(doc(db, 'households', householDocId), (doc) => {
        if (doc.exists()) {
          const householdData = doc.data();
          const listData = householdData.lists?.grocery || [];
          setData(listData);
          setIsLoading(false);
        } else {
          setError(
            'There was a problem retrieving your list. Please try again'
          );
          setIsLoading(false);
        }
      });
    };

    fetchData();

    return () => {
      if (unsub) {
        unsub();
      }
    };
  }, [currentUser, householDocId, household]);

  const deleteItem = useCallback(
    async (item: ListItemType) => {
      const householdRef = doc(db, 'households', householDocId);

      try {
        await updateDoc(householdRef, {
          'lists.grocery': arrayRemove(item),
        });
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
    [householDocId]
  );

  return (
    <MemoizedGroceriesScreenUI
      data={data}
      error={error}
      isLoading={isLoading}
      deleteItem={deleteItem}
    />
  );
};

export default GroceriesScreenContainer;
