import React, { useCallback, useEffect, useState } from 'react';
import PrivateListScreenUI from './PrivateListScreenUI';
import { ListItemType } from '../../constants/listItemType';
import useAuth from '../../hooks/useAuth';
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../App';

const MemoizedPrivateListScreenUI = React.memo(PrivateListScreenUI);

const PrivateListScreenContainer = () => {
  const { currentUser } = useAuth();
  const [data, setData] = useState<ListItemType[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  console.log('currentUUUUSER', currentUser);

  const deleteItem = useCallback(
    async (item: ListItemType) => {
      if (!currentUser) return;

      const userRef = doc(db, 'users', currentUser.uid);

      try {
        await updateDoc(userRef, {
          'lists.private': arrayRemove(item),
        });
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
    [currentUser]
  );
  useEffect(() => {
    setError('');
    let unsub: () => void;

    if (!currentUser) {
      setError('You must be logged in');
      setIsLoading(false);
      return;
    }

    const fetchData = () => {
      console.log('fetchData runs@@@');
      try {
        unsub = onSnapshot(doc(db, 'users', currentUser.uid), (doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            console.log('userData from private list', userData);
            const listData = userData.lists?.private || [];
            setData(listData);
            setIsLoading(false);
          } else {
            setError(
              'There was a problem retrieving your list. Please try again'
            );
            setIsLoading(false);
          }
        });
      } catch (error: any) {
        console.error(error);
        setError('There was a problem retrieving your list. Please try again');
      }
    };

    fetchData();

    return () => {
      if (unsub) {
        unsub();
      }
    };
  }, [currentUser]);

  return (
    <MemoizedPrivateListScreenUI
      data={data}
      error={error}
      isLoading={isLoading}
      deleteItem={deleteItem}
    />
  );
};

export default PrivateListScreenContainer;
