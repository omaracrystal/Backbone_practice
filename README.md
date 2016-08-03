#A Backbone.js Rails Example

##Steps:

1. Set up folder structure

	```
	- app/
	    - controllers/
	        - documents_controller.rb
	    - models/
	        - document.rb
	    - views/
	        - home/
	            - index.html.erb
	- public/
	    - javascripts/
	        - application.js
	        - controllers/
	            - documents.js
	        - models/
	            - document.js
	        - views/
	            - show.js
	            - index.js
	            - notice.js
	```

1. Set up the model
	- public/javascripts/models/document.js
1. Add Controller that handles the routes: edit, index and newDoc. 
	- public/javascripts/controllers/documents.js
1. Set up the Main App Object - The root route for the Rails server will serve up the following HTML, which our Backbone app will use as its scaffolding
	- app/views/home/index.html.erb
1. The actual main App object holds Views, Controllers, and init:

	```
	var App = {
	    Views: {},
	    Controllers: {},
	    init: function() {
	        new App.Controllers.Documents();
	        Backbone.history.start();
	    }
	};
	```
	- public/javascripts/application.js
1. Set up the Backbone Views
	- public/javascripts/views/index.js
1. 