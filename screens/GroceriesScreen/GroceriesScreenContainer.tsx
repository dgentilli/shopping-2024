import React, { useEffect, useState } from 'react';
import GroceriesScreenUI from './GroceriesScreenUI';
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../App';
import useAuth from '../../hooks/useAuth';
import { ListItemType } from '../../constants/listItemType';

const MemoizedGroceriesScreenUI = React.memo(GroceriesScreenUI);

const GroceriesScreenContainer = () => {
  const { currentUser } = useAuth();
  const [data, setData] = useState<ListItemType[]>([]);
  const [error, setError] = useState('');

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

  const deleteItem = (id: string) => {
    // You'll need to make an API call eventually
    // For now...
    console.log('id recd by deleteItem function', id);
  };

  return (
    <MemoizedGroceriesScreenUI
      data={data}
      error={error}
      deleteItem={deleteItem}
    />
  );
};

export default GroceriesScreenContainer;
