export interface ListItemType {
  id: string;
  itemName: string;
  itemQuantity: number;
  isChecked: boolean;
  type: 'grocery' | 'pharmacy';
}
