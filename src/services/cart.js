async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, itemId) {
  const index = userCart.findIndex((item) => item.itemId === itemId);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.itemName === item.itemName);

  if (indexFound == -1) {
    console.log("Error: Item not found!");
    return;
  }

  if (userCart[indexFound].qty > 1) {
    userCart[indexFound].qty -= 1;
    return;
  }

  if (userCart[indexFound].qty == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\nThe total value of the cart is... R$ ${result}`);
}

async function displayCart(userCart) {
  console.log("Shopping cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.itemName} - R$ ${item.itemPrice} | ${
        item.qty
      }x | Subtotal: R$ ${item.subtotal()}`
    );
  });
}

const cart = {
  addItem,
  deleteItem,
  removeItem,
  calculateTotal,
  displayCart,
};

export default cart;
