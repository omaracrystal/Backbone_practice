/*Backbone Views

Now that we have the plumbing done, let’s work on the views, which is the actual user facing interface.

For the purposes of this tutorial, I’ll use simple string concatenation in my views. Of course, for more complicated apps, I would highly suggest using a templating framework like jQuery templates or jQote. 

This view accepts a list of documents, and simply lists them out with links to edit each of the documents. I want to highlight a few things:

- Backbone automatically (and conveniently) captures the hash passed to the initialization of the object, and sticks it into this.options.

- The only method really required by the views is render, and you can do anything you want to render the view. In this case, all we do is some string concatenation, and stick it into the #app div element.

- I like to call render immediately at the end of initialize. What this means is that as soon as you instantiate the view object, it gets rendered.

- Note that there is no event delegation specified. The links to each document is handled automatically by the controller by simply specifying the right hash url to the Edit action. Backbone’s History object automatically handles routing the clicks to the Edit action. This greatly simplifies views which usually have a million events flying around just to do routing correctly.

*/
App.Views.Index = Backbone.View.extend({
    initialize: function() {
        this.documents = this.options.documents;
        this.render();
    },
    
    render: function() {
        if(this.documents.length > 0) {
            var out = "<h3><a href='#new'>Create New</a></h3><ul>";
            _(this.documents).each(function(item) {
                out += "<li><a href='#documents/" + item.id + "'>" + item.escape('title') + "</a></li>";
            });
            out += "</ul>";
        } else {
            out = "<h3>No documents! <a href='#new'>Create one</a></h3>";
        }
        $(this.el).html(out);
        $('#app').html(this.el);
    }
});