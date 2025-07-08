import item from "./services/item.js";
import cart from "./services/cart.js";

const myCart = [];

console.log("Welcome to your shopping cart!\n");

const firstItem = await item.createItem(1, "Coloring Book", 30, 5);
const secondItem = await item.createItem(2, "Coloring Pens", 50, 5);

await cart.addItem(myCart, firstItem);
await cart.addItem(myCart, secondItem);
await cart.removeItem(myCart, firstItem);
await cart.displayCart(myCart);
// await cart.deleteItem(myCart, firstItem.itemId);
// await cart.deleteItem(myCart, secondItem.itemId);

await cart.calculateTotal(myCart);
