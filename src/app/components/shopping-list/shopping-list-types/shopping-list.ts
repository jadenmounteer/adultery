import { ShoppingListDepartment } from './shopping-list-department';
import { ShoppingListItem } from './shopping-list-item';

export interface ShoppingList {
  id: string;
  userId: string | undefined;
  item: ShoppingListItem;
  department: ShoppingListDepartment | undefined;
  purchased: boolean;
  quantity: number | undefined;
}
