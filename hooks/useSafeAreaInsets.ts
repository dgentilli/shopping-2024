import { useSafeAreaInsets as useRNSareAreaInsets } from 'react-native-safe-area-context';

export const useSafeAreaInsets = () => {
  const {
    top: topInset,
    bottom: bottomInset,
    left: leftInset,
    right: rightInset,
  } = useRNSareAreaInsets();

  return {
    topInset,
    bottomInset,
    leftInset,
    rightInset,
  };
};
