//Note that these match up with the RESTful pages we would expect from a Document resource. You certainly don’t have to organize it this way, but I find that it really helps to have your Backbone structure follow a RESTful pattern.

//name App.Controllers.Documents
App.Controllers.Documents = Backbone.Controller.extend({
    //Routes - The controller expects you to define routes for each action in your app. In our case, we have the 3 routes (edit, index, newDoc), specified as a javascript object mapping from the url hash structure to the method that is invoked. So, for example, when the user goes to /#documents/3, it will show the edit page for the document with id 3.
    routes: {
        "documents/:id":            "edit",
        "":                         "index",
        "new":                      "newDoc"
    },


    //Methods - The rule that I use for controller methods is that they should only do 3 things: (1) get the data from the server to populate the models, (2) process that data for the views, and (3) instantiate the views.

    
    //The edit method is simple: it instantiates the Document with the given id, and then fetches the data for it from the server. Upon success, we instantiate the App.Views.Edit view.
    edit: function(id) {
        var doc = new Document({ id: id });
        doc.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: doc });
            },
            error: function() {
                new Error({ message: 'Could not find that document.' });
                window.location.hash = '#';
            }
        });
    },
    

    //in our index method, we make an ajax JSON call to the Documents#index action on the server to get a list of documents. Then, we iterate through the list and instantiate a Document model for each of the JSON data. Finally, we instantiate the App.Views.Index view with the array of models.
    index: function() {
        $.getJSON('/documents', function(data) {
            if(data) {
                var documents = _(data).map(function(i) { return new Document(i); });
                new App.Views.Index({ documents: documents });
            } else {
                new Error({ message: "Error loading documents." });
            }
        });
    },
    
    newDoc: function() {
        new App.Views.Edit({ model: new Document() });
    }
});