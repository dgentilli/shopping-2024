import { useState, useEffect, useRef } from 'react';
import { AppState } from 'react-native';

const useAppState = () => {
  const appState = useRef(AppState.currentState);
  const [currentAppState, setCurrentAppState] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      setCurrentAppState(nextAppState);
    });

    return () => subscription.remove();
  }, []);

  const onChange = (callback: Function) => {
    callback();
  };

  const onForeground = (callback: Function) => {
    if (currentAppState === 'active') {
      callback();
    }
  };

  const onBackground = (callback: Function) => {
    if (currentAppState !== 'active') {
      callback();
    }
  };

  return { currentAppState, onChange, onForeground, onBackground };
};

export default useAppState;
