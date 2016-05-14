// Start in strict mode so that non-defined variables give an error.
"use strict";

var App = {
  version: '0.4.1',
  productsApi: 'http://demo8844552.mockable.io/products',
  /**
   * TODO: Exercise 4.1: create a new property to store the number of products.
   */

  /**
   * TODO: Exercise 4.2: implement below function so that it creates the DOM
   * article element for the given product JS object. Returns the element.
   *
   * Input:
   * product: JS object representing a product. Example:
   * {
   *    title: "The perfect menu",
   *    description: "Toasts with garlic, tomato and ham",
   *    imageUrl: "http://lorempixel.com/300/200/food/1/",
   *    price: "6"
   * }
   *
   * Output markup of the article:
   * <article>
   *   <img src="http://lorempixel.com/300/200/food/1" alt="product">
   *   <div>The perfect menu</div>
   *   <div>Toasts with garlic, tomato and ham</div>
   *   <div class="horizontal-layout">
   *     <div>6€</div>
   *     <div>Add</div>
   *   </div>
   * </article>
   */
  createProductArticle: function (product) {
    // Implementation here
  },
  /**
   * TODO: Exercise 4.4: implement below function so that it updates the Cart
   * info with the number of products stored in App.productsNumber: "Cart (1)".
   *
   * Then call this function when product Add button is clicked, but just before
   * that update App.productsNumber increasing it by 1 unit.
   */
  refreshCartInfo: function () {
    // Implementation here
  }
};
