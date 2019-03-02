sap.ui.jsview("data_binding.mainPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf data_binding.mainPage
	*/ 
	getControllerName : function() {
		return "data_binding.mainPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf data_binding.mainPage
	*/ 
	createContent : function(oController) {

		
/*


*/		
		var oForm = new sap.ui.layout.form.SimpleForm({
			content: [
				
			]
		});

		const oPage = new sap.m.Page({
			title: "Tootle",
			content: [

			]
		});


		
		return oPage;
	}

});

/*
var oSimpleForm = new sap.ui.layout.form.SimpleForm({

})


*/