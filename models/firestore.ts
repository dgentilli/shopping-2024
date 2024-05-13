export type Household = {
  id: string;
  shareCode: string;
  userIds: string[]; // References to user documents
  listIds: string[]; // References to shopping list documents
};

export type User = {
  id: string;
  email: string;
  householdId: string; // Reference to the household document
  privateListIds: string[]; // References to shopping list documents (private list)
  nickname?: string;
};

export type ShoppingList = {
  id: string;
  type: 'grocery' | 'pharmacy' | 'private';
};

export type ShoppingListItem = {
  id: string;
  listId: string; // Reference to the list it belongs to
  name: string;
  quantity: number;
  status: 'active' | 'inactive';
};
