export interface ShoppingListItem {
  id: string;
  userId: string | undefined;
  itemName: string;
  estimatedPrice: number | undefined;
}
