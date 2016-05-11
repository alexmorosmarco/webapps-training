// Start in strict mode so that non-defined variables give an error.
"use strict";

/*****************
 ** APP STARTUP **
 *****************/
(function() {
  function onLoaded() {
    /**
     * TODO: Exercise 3.3: Print to the console the version of the app.
     */
    console.log('App v' + App.version);
    // Register events on elements now that the DOM content is loaded
    /**
     * TODO: Exercise 3.4: Register the click event of the menu button
     * and show an alert informing the version of the app.
     */
    var menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', function(event) {
      alert('Info: App v' + App.version);
    }, false);
  }

  document.addEventListener('DOMContentLoaded', function(event) {
    onLoaded();
  }, false);
}());
