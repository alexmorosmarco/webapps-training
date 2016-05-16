// Start in strict mode so that non-defined variables give an error.
"use strict";

var App = {
  version: '0.5.0',
  productsApi: 'http://demo8844552.mockable.io/products',
  productsNumber: 0,
  /**
   * It creates the DOM article element for the given product JS object.
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
    var image = document.createElement('div');
    image.classList.add('picture');
    image.style.backgroundImage = 'url(' + product.imageUrl + ')';
    var title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = product.title;
    var description = document.createElement('div');
    description.innerHTML = product.description;

    var price = document.createElement('div');
    price.innerHTML = product.price + "€";
    var addButton = document.createElement('div');
    addButton.classList.add('button');
    addButton.innerHTML = "Add";
    addButton.addEventListener('click', function(event) {
      App.addProductToCart();
    }, false);
    var bottom = document.createElement('div');
    bottom.classList.add('horizontal-layout');
    bottom.appendChild(price);
    bottom.appendChild(addButton);

    var footer = document.createElement('footer');
    footer.appendChild(title);
    footer.appendChild(description);
    footer.appendChild(bottom);

    var article = document.createElement('article');
    article.appendChild(image);
    article.appendChild(footer);

    return article;
  },
  refreshCartInfo: function () {
    var cartButton = document.getElementById('cart-button');
    cartButton.innerHTML = "Cart (" + App.productsNumber + ")";
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
