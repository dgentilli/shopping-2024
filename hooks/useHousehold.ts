import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../App';

const useHousehold = (userId: string) => {
  const [household, setHousehold] = useState<any>(null);
  const [householDocId, setHouseholdDocId] = useState('');
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
        querySnapshot.docs.find((doc) => {
          const data = doc.data();
          if (data.householdData.userIds.includes(userId)) {
            setHousehold(data);
            setHouseholdDocId(doc.id);
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

  return { household, householDocId, householdError };
};

export default useHousehold;
