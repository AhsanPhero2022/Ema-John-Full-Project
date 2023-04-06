import { getShoppingCart } from "../../utilities/fakedb";

const cartProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  // if you need to send two things then step:1 you should return arrow([]) type, another you should use second barrecat like this {}.

  // return [savedCart, savedCart];
  // return {savedCart, savedCart};
  return savedCart;
};
export default cartProductLoader;
