// Start in strict mode so that non-defined variables give an error.
"use strict";

var App = {
  version: '0.5.1',
  productsApi: 'http://demo8844552.mockable.io/products',
  productsNumber: 0,
  /**
   * It creates the DOM article element for the given product JS object, taking
   * the article template from the index.html templates.
   * Returns the element.
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
   *   <div class="picture" style="background-image: url(&quot;http://lorempixel.com/300/200/food/1/&quot;);"></div>
   *   <footer>
   *     <div class="title">The perfect menu</div>
   *     <div class="description">Toasts with garlic, tomato and ham</div>
   *     <div class="horizontal-layout spaced">
   *       <div class="price">6€</div>
   *       <div class="button">Add</div>
   *     </div>
   *   </footer>
   * </article>
   */
  createProductArticle: function (product) {
    var template = document.getElementById('product-template');
    var article = template.cloneNode(true);
    article.removeAttribute('id');

    var picture = article.getElementsByClassName('picture')[0];
    picture.style.backgroundImage = 'url(' + product.imageUrl + ')';
    var title = article.getElementsByClassName('title')[0];
    title.innerHTML = product.title;
    var description = article.getElementsByClassName('description')[0];
    description.innerHTML = product.description;
    var price = article.getElementsByClassName('price')[0];
    price.innerHTML = product.price + "€";
    var addButton = article.getElementsByClassName('button')[0];
    addButton.addEventListener('click', function(event) {
      App.addProductToCart();
    }, false);

    return article;
  },
  refreshCartInfo: function () {
    var cartButton = document.getElementById('cart-button');
    cartButton.innerHTML = "(" + App.productsNumber + ")";
  },
  addProductToCart: function () {
    App.productsNumber++;
    window.localStorage.setItem('productsNumber', App.productsNumber);
    App.refreshCartInfo();
  },
  resetCart: function () {
    App.productsNumber = 0;
    window.localStorage.removeItem('productsNumber');
    App.refreshCartInfo();
  }
};
