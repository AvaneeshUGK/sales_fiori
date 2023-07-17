sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/ui/model/json/JSONModel",        
    ],
    function(BaseController, JSONModel) {
      "use strict";
      return BaseController.extend("project.salesfiori.controller.Version", {
        onInit: function() {
          var url='Z_SOURCE_EVENT_SRV/VendorPriceSet?$filter=(%20Srcevtname%20eq%20%27101%27%20)&$format=json';
          fetch(url).then(res => res.json()).then(res =>
            {
              var dataModel = new sap.ui.model.json.JSONModel();
              dataModel.setData(res.d.results);
              this.getView().setModel(dataModel,"oJSONModel")
            });
        },
        onload: function(oEvent)
        {
          var oRouter = this.getOwnerComponent().getRouter();
          console.log("onload");
          oRouter.navTo("detail");
        },
        onload2:function(oEvent)
        {  var oModel = new JSONModel(oData);
          this.getView().setModel(oModel);
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("venderprice");
        },
        backtoDetail: function(oEvent)
        { debugger
          var oRouter = this.getOwnerComponent().getRouter();
          console.log("back to previous page");
          oRouter.navTo("detail");
        },
        back: function (oEvent) {
          debugger
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("detail");
        },
        onNavBack: function () { debugger
          var oHistory = History.getInstance();
          var sPreviousHash = oHistory.getPreviousHash();
          if (sPreviousHash !== undefined) {
            window.history.go(-1);
          } else {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("App", {}, true);
          }
        },
      });
    }
  );
  