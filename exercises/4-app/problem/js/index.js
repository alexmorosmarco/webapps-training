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
    }, false);
    /**
     * TODO: Exercise 4.6: Register the click event of the cart button
     * and show an alert informing the success on the user's order and resetting
     * the cart.
     */
     
    /**
     * TODO: Exercise 4.5: show the number of products in the cart info, if
     * the number is stored in the localStorage, so that the user does not
     * lose the session if he reloads the web app.
     */


    // Get products from server and add them to the view
    /**
     * TODO: Exercise 4.3: get the products from the server URL
     * stored in App.productsApi using a XHR request. Then
     * create DOM articles through App.createProductArticle function on "app.js"
     * and insert them in the main container.
     */

  }

  document.addEventListener('DOMContentLoaded', function(event) {
    onLoaded();
  }, false);
}());
