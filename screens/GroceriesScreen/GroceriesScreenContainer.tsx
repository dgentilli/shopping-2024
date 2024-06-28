import React, { useEffect, useState } from 'react';
import GroceriesScreenUI from './GroceriesScreenUI';
import { groceriesMockData } from '../../mockData/groceries';
import { ListItemType } from '../../constants/listItemType';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../App';
import useAuth from '../../hooks/useAuth';

const MemoizedGroceriesScreenUI = React.memo(GroceriesScreenUI);

const GroceriesScreenContainer = () => {
  const { currentUser } = useAuth();
  const [data, setData] = useState<any>([]);
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

      const docRef = doc(db, 'households', userHousehold.id);
      const docSnap = await getDoc(docRef);

      console.log('docSnap from fetch', docSnap);

      if (docSnap.exists()) {
        const householdData = docSnap.data();
        const groceryList = householdData.lists?.grocery || [];
        setData(groceryList);
      } else {
        setError('There was a problem retrieving your list. Please try again');
      }
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
