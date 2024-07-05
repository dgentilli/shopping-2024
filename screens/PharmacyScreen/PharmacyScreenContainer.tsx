import React, { useCallback, useEffect, useState } from 'react';
import PharmacyScreenUI from './PharmacyScreenUI';
import { ListItemType } from '../../constants/listItemType';
import useAuth from '../../hooks/useAuth';
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../App';
import useHousehold from '../../hooks/useHousehold';

const MemoizedPharmacyScreenUI = React.memo(PharmacyScreenUI);

const PharmacyScreenContainer = () => {
  const { currentUser } = useAuth();
  const { householDocId, household } = useHousehold(currentUser?.uid || '');
  const [data, setData] = useState<ListItemType[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setError('');
    let unsub: () => void;

    if (!currentUser || !householDocId || !household) return;

    const fetchData = async () => {
      unsub = onSnapshot(doc(db, 'households', householDocId), (doc) => {
        if (doc.exists()) {
          const householdData = doc.data();
          const listData = householdData.lists?.pharmacy || [];
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
        unsub;
      }
    };
  }, [currentUser, householDocId, household]);

  const deleteItem = useCallback(
    async (item: ListItemType) => {
      const householdRef = doc(db, 'households', householDocId);

      try {
        await updateDoc(householdRef, {
          'lists.pharmacy': arrayRemove(item),
        });
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
    [householDocId]
  );

  return (
    <MemoizedPharmacyScreenUI
      data={data}
      error={error}
      isLoading={isLoading}
      deleteItem={deleteItem}
    />
  );
};

export default PharmacyScreenContainer;
