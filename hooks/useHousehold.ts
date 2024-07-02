import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../App';

const useHousehold = (userId: string) => {
  const [household, setHousehold] = useState<any>(null);
  const [householdError, setHouseholdError] = useState('');

  useEffect(() => {
    const getHousehold = async () => {
      if (!userId) {
        setHouseholdError('You must be logged in!');
        return;
      }
      try {
        const householdsRef = collection(db, 'households');
        const querySnapshot = await getDocs(householdsRef);
        const userHousehold = querySnapshot.docs.find((doc) => {
          const data = doc.data();
          if (data.householdData.userIds.includes(userId)) {
            setHousehold(data);
          } else {
            setHouseholdError('No household found!');
          }
        });
      } catch (error) {
        console.log('error from useHousehold catch block', error);
        setHouseholdError('Something went wrong!');
      }
    };

    getHousehold();
  }, [userId]);

  return { household, householdError };
};

export default useHousehold;
