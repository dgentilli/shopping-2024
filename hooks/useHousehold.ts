import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../App';

const useHousehold = (userId: string) => {
  const [household, setHousehold] = useState<any>(null);
  const [householdError, setHouseholdError] = useState('');
  console.log('household from hook', household);

  useEffect(() => {
    const getHousehold = async () => {
      console.log('getHousehold runs!!!');
      if (!userId) {
        setHouseholdError('You must be logged in!');
        return;
      }
      try {
        const householdsRef = collection(db, 'households');
        const querySnapshot = await getDocs(householdsRef);
        const userHousehold = querySnapshot.docs.find((doc) => {
          const data = doc.data();
          return data.householdData.userIds.includes(userId);
        });

        console.log('userHOusehold from hook', userHousehold);

        if (!userHousehold) {
          console.error('no userHousehold from hook');
          setHouseholdError('You must be part of a household');
          return;
        } else {
          setHousehold(userHousehold);
        }
      } catch (error) {
        console.log('error from catch block', error);
        setHouseholdError('Something went wrong!');
      }
    };

    getHousehold();
  }, [userId]);

  return { household, householdError };
};

export default useHousehold;
