async function createItem(itemId, itemName, itemPrice, qty) {
  return {
    itemId,
    itemName,
    itemPrice,
    qty,
    subtotal: () => itemPrice * qty,
  };
}

const item = {
  createItem,
};

export default item;
