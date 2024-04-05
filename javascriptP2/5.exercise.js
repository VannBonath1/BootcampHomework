function myProduct(product) {
  for (let index = 0; index < product.length; index++) {
    if (product[index].quantity > 0) {
      console.log(
        "Product name:",
        product[index].name,
        "product price:",
        product[index].price,
        "product quantity:",
        product[index].quantity
      );
    }
  }
}
myProduct([
  { name: "Shirt", price: 10, quantity: 1 },
  { name: "pant", price: 20, quantity: 0 },
  { name: "hat", price: 30, quantity: 2 },
]);
