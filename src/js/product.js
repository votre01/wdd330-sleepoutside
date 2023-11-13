import ProductData from './ProductData.mjs';
import { setLocalStorage, getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from './productDetails.mjs';

const productId = getParams("product");
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init();

// console.log(dataSource.findProductById(productId));

/* function addProductToCart(product) {
  setLocalStorage("so-cart", product);
} */