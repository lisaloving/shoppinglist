import {Item} from "../model/item.model";

//in-store memory before adding database, the key is the item id
//dictionary instead of list
let items : { [key: number] : Item} = {};

//get all items on the shopping list
export const getItem : () => Promise<Array<Item>> = async() => {
    return Object.values(items);
}

//add a new item to the shopping list
export const addItem : (itemDescription:string) => Promise<Item> =
    async (itemDescription:string) =>{
        const newItem : Item = {
            id: new Date().valueOf(), //time in milliseconds, makes sure all items have a unique id-number
            itemDescription: itemDescription,
            purchased: false
        }
        items[newItem.id] = newItem;
        return newItem;
    }

//mark a todoTask as done if it exists,
//returning true if exist and false if not exist
export const markAsPurchased : (id:number) => Promise<boolean> =
    async(id:number) => {
        const item : Item = items[id];
        if(!item){ return false};
        item.purchased = true;
        return true;
    }
    