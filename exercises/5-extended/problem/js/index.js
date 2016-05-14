// Start in strict mode so that non-defined variables give an error.
"use strict";

/*****************
 ** APP STARTUP **
 *****************/
(function() {
  function onLoaded() {
    console.log('App v' + App.version);
    // Register events on elements now that the DOM content is loaded
    var menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', function (event) {
      alert('Info: App v' + App.version);
    }, false);

    var cartButton = document.getElementById('cart-button');
    cartButton.addEventListener('click', function (event) {
      if (App.productsNumber) {
        alert('Your order has been received successfully.\n' +
              'You will receive it in 45 minutes. Thanks.');
        App.resetCart();
      } else {
        alert('You do not have any products in the cart yet.\n' +
              'Please add some and try again.');
      }
    }, false);

    var productsNumber = window.localStorage.getItem('productsNumber');
    if (productsNumber) {
      App.productsNumber = productsNumber;
      App.reloadCartInfo();
    }

    // Get products from server and add them to the view
    var request = new XMLHttpRequest();
    request.open('GET', App.productsApi, true);
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        var products = JSON.parse(request.responseText);
        var main = document.getElementsByTagName('main')[0];
        var i;
        var productArticle;
        for (i=0; i<products.length; i++) {
          productArticle = App.createProductArticle(products[i]);
          main.appendChild(productArticle);
        }
      }
    };
    request.send();
  }

  document.addEventListener('DOMContentLoaded', function (event) {
    onLoaded();
  }, false);
}());
