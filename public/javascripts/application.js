//The main App object itself is dead simple:

//The two main things to take note is the instantiation of the Documents controller, and the call to the Backbone.history.start(). These combined will kick off the necessary listeners to make the hash routing work.
var App = {
    Views: {},
    Controllers: {},
    init: function() {
        new App.Controllers.Documents();
        Backbone.history.start();
    }
};