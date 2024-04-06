import { useSafeAreaInsets as useRNSareAreaInsets } from 'react-native-safe-area-context';

const useSafeAreaInsets = () => {
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

export default useSafeAreaInsets;
