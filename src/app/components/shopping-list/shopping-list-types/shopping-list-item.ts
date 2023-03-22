import { ShoppingListDepartment } from './shopping-list-department';

export interface ShoppingListItem {
  id: string;
  userId: string | undefined;
  itemName: string;
  estimatedPrice: number | undefined;
  quantityNeeded: number | undefined;
  department: ShoppingListDepartment | undefined;
  purchased: boolean;
}
