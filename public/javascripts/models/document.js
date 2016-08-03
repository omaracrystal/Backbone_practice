//Backbone Models

// We only have one model: the Document. It has a title and a body attribute. But take note that you don’t actually need to specify that in the Backbone model: they’re populated by JSON data, either from the server or from the client.
var Document = Backbone.Model.extend({
    url : function() {
      var base = 'documents';
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
    }
});
