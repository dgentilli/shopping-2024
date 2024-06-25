import { create } from 'zustand';

interface UserState {
  isSignupComplete: boolean;
}

interface UserActions {
  setIsSignupComplete: (status: boolean) => void;
}

const useUserStore = create<UserState & UserActions>((set) => ({
  isSignupComplete: false,
  setIsSignupComplete: (status: boolean) => set({ isSignupComplete: status }),
}));

export default useUserStore;
