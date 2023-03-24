export interface ShoppingListItem {
  id: string;
  userId: string | undefined;
  itemName: string;
  estimatedPrice: number | undefined;
  quantityNeeded: number | undefined;
  department:
    | 'PersonalCare'
    | 'Grocery'
    | 'Appliances'
    | 'Home'
    | 'Beauty'
    | 'Pharmacy'
    | 'Sports'
    | 'Outdoors'
    | 'PartySupplies'
    | 'Garden'
    | 'Baby'
    | 'Automotive'
    | 'Electronics'
    | 'HomeImprovement'
    | 'Apparel'
    | '';

  purchased: boolean;
}
