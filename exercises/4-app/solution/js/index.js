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
    menuButton.addEventListener('click', function(event) {
      alert('Info: App v' + App.version);
    }, true);

    /**
     * TODO: Exercise 4.5: show the number of products in the cart info, if
     * the number is stored in the localStorage, so that the user does not
     * lose the session if he reloads the web app.
     */
    var productsNumber = window.localStorage.getItem('productsNumber');
    if (productsNumber) {
      App.productsNumber = productsNumber;
      App.reloadCartInfo();
    }

    // Get products from server and add them to the view
    /**
     * TODO: Exercise 4.3: get the products from the server URL
     * stored in App.productsApi using a XHR request. Then
     * create DOM articles through App.createProductArticle function on "app.js"
     * and insert them in the main container.
     */
    var request = new XMLHttpRequest();
    request.open('GET', App.productsApi, true);
    request.onreadystatechange = function() {
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

  document.addEventListener('DOMContentLoaded', function(event) {
    onLoaded();
  }, false);
}());
