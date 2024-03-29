import { ShoppingListItem } from './shopping-list-item';

export interface ShoppingList {
  id: string;
  userId: string | undefined;
  listName: string | null;
  items: ShoppingListItem[] | null;
  complete: boolean;
}
