import { SheetDefinition, registerSheet } from 'react-native-actions-sheet';
import AddItem from './components/AddItemComponents/AddItem';

export interface AddItemSheetProps {
  payload: {
    title: string;
    type: 'grocery' | 'pharmacy' | 'private';
  };
}

registerSheet('add-item-sheet', AddItem);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'add-item-sheet': SheetDefinition;
  }
}

export const setupSheets = () => {
  // This function doesn't need to do anything
  // Its purpose is to ensure the module is executed
};
