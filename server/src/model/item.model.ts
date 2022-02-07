
// Item represents an item on the shoppinglist. An item has a unique id number, a description and
// it is possible to mark as purchased if added to cart in store.
// Example: 0001, "1 kg ripe bananas", false
export interface Item{
    id:number,
    itemDescription: string,
    purchased: boolean
    /* quantity: string,
    name: string,
    description: string,*/

}


// Later may add more complexity by seperating the itemDescrition into quantity, name of item and (extra) description, like this:
// The description is extra text needed. Id is a unique number to keep track of the specific item. Quantity is how many to buy.
// Ex: 0001, "1 kg", "bananas", "ripe ones only", false