sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project.salesfiori.controller.View", {
            onInit: function () {

            },
              detail: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("detail");
              }
        });
    });
