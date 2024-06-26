import DropDownPicker, {
  ItemType,
  ValueType,
} from 'react-native-dropdown-picker';

interface DropdownMenuProps<T extends ValueType> {
  isOpen: boolean;
  value: T | null;
  items: ItemType<T>[];
  setValue: (val: ValueType | null) => void;
  setOpen: () => void;
}

const DropdownMenu = <T extends ValueType>(props: DropdownMenuProps<T>) => {
  const { isOpen, value, items, setValue, setOpen } = props;
  return (
    <DropDownPicker
      style={{ height: 75 }}
      open={isOpen}
      value={value}
      items={items}
      setValue={setValue}
      setOpen={setOpen}
    />
  );
};

export default DropdownMenu;
