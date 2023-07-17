sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History"
    ],
    function(BaseController,History) {
      "use strict";
  
      return BaseController.extend("project.salesfiori.controller.App", {
        onInit: function() {
          var url='/Z_SOURCE_EVENT_SRV/VendorComparisonSet?$filter=(Srcevtname%20eq%20%27101%27)&$format=json';
          // var url='Z_SOURCE_EVENT_SRV/SourcingEventSet?$format=json';
          fetch(url).then(res => res.json()).then(res =>
            {debugger
              
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
        {
          var oRouter = this.getOwnerComponent().getRouter();
          console.log("onload");
          oRouter.navTo("overview");
        },

        onPreview: function(oEvent)
        {
          var oRouter = this.getOwnerComponent().getRouter();
          console.log("onPreview");
          oRouter.navTo("vendorprice");
        },
        gotoquestions: function(oEvent)
        {
          var oRouter = this.getOwnerComponent().getRouter();
          console.log("onOpen");
          oRouter.navTo("questions");
        },

        fetchversion: function(oEvent)
        {
          var oRouter = this.getOwnerComponent().getRouter();
          console.log("fetchversion");
          oRouter.navTo("version");
        },
        onNavBack: function () { debugger
          var oHistory = History.getInstance();
          var sPreviousHash = oHistory.getPreviousHash();
    
          if (sPreviousHash !== undefined) {
            window.history.go(-1);
          } else {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("app", {}, true);
          }
        },

        onCreate : function () {
          var oList = this.byId("table"),
            oBinding = oList.getBinding("items");
            oList.getItems().some(function (oItem) {
              if (oItem.getBindingContext() === oContext) {
                oItem.focus();
                oItem.setSelected(true);
                return true;
              }
            });
          },

      });
    }
  );
  