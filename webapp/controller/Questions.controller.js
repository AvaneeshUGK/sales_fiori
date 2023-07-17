sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/ui/model/json/JSONModel",
     
  
    ],
    function (BaseController, JSONModel,Api) {
      "use strict";
      return BaseController.extend("project.salesfiori.controller.Questions", {
        onInit: function() {
            var url='Z_SOURCE_EVENT_SRV/QuestionAllSet?$format=json';
           
            fetch(url).then(res => res.json()).then(res =>
              {debugger
                
                var dataModel = new sap.ui.model.json.JSONModel();
               
                  dataModel.setData(res.d.results);
                this.getView().setModel(dataModel,"questionsModel")
            
              });
  
  
  
        },
        backtoDetail: function (oEvent) {
            debugger
            var oRouter = this.getOwnerComponent().getRouter();
            console.log("fetchversion");
            oRouter.navTo("detail");
          },
        onload: function (oEvent) {
          var oRouter = this.getOwnerComponent().getRouter();
          console.log("onload");
          oRouter.navTo("detail");
        },
        onload2: function (oEvent) {
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel);
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("venderprice");
  
  
        },
  
        back: function (oEvent) {
          debugger
          var oRouter = this.getOwnerComponent().getRouter();
          console.log("fetchversion");
          oRouter.navTo("detail");
        },
  
  
      });
    }
  );
  