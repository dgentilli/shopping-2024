import { create } from 'zustand';

interface HouseholdState {
  householdShareCode: string;
}

interface HouseholdActions {
  setHouseHoldShareCode: (code: string) => void;
}

const useHouseholdStore = create<HouseholdState & HouseholdActions>((set) => ({
  householdShareCode: '',
  setHouseHoldShareCode: (code: string) => set({ householdShareCode: code }),
}));

export default useHouseholdStore;
