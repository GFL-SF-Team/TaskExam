({
    doInit : function(component, event, helper) {

        helper.initComponent(component, helper);
    },

    handleSelectedClient : function(component, event, helper) {

        helper.sendDataToDetailSection(component, helper, event.getParam("params").clientId);
    },

    handleSetClientItem : function(component, event, helper) {

        helper.setNewItem(component, helper, event.getParam("params"));
    },

    refreshClientData : function(component, event, helper) {

        helper.getClientData(component, helper, event.getParam("params"));
    }
})
