sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/ui/model/json/JSONModel",  
    ],
    function (BaseController, JSONModel,Api) {
      "use strict";
  
      return BaseController.extend("project.salesfiori.controller.Version", {
        onInit: function() {
          var url='/Z_SOURCE_EVENT_SRV/VendorPriceSet?$filter=(%20Srcevtname%20eq%20%27101%27%20)&$format=json';
          fetch(url).then(res => res.json()).then(res =>
            {
              var dataModel = new sap.ui.model.json.JSONModel();
              dataModel.setData(res.d.results);
              this.getView().setModel(dataModel,"oJSONModel")
            });
        },
        onload: function (oEvent) {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("detail");
        },
        onload2: function (oEvent) {
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel);
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("venderprice");
        },  
        onsubmitalert:function(oEvent){
          alert("Thank you for your Notes ")
        },
        back: function (oEvent) {
          debugger
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("detail");
        },
      });
    }
  );
  