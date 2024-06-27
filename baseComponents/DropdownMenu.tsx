import DropDownPicker, {
  ItemType,
  ValueType,
} from 'react-native-dropdown-picker';
DropDownPicker.setListMode('MODAL'); // Allows scrolling inside the action sheet

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
      listMode='SCROLLVIEW'
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
