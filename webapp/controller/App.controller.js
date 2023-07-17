sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/fe/core/controllerextensions/Routing",
  ],
  function (BaseController, History) {
    "use strict";

    return BaseController.extend("project.salesfiori.controller.App", {
      onInit() {
        // Z_SOURCE_EVENT_SRV/QuestionAllSet?$format=json
        var url = '/Z_SOURCE_EVENT_SRV/SourcingEventSet?$format=json';
        fetch(url).then(res => res.json()).then(res => {
          var dataModel = new sap.ui.model.json.JSONModel();
          dataModel.setData(res.d.results);
          this.getView().setModel(dataModel, "oJSONModel")
          this.oRouter = this.getOwnerComponent().getRouterFor(this);
        });
      },


      detail: function (oEvent) {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("detail");
        console.log("Detail Page");
      },
      invoice: function (oEvent) {
        debugger
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("invoiceList");
      },
      view: function (oEvent) {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("view");
        console.log("view");
      },
      overview: function (oEvent) {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("overview");
        console.log("over");

      },
      fetchversion: function (oEvent) { debugger
        var oRouter = this.getOwnerComponent().getRouter();
        console.log("fetchversion");
        oRouter.navTo("version");
      },

    });
  }
);
