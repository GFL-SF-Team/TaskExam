({
    handleSetModal : function(component, event, helper) {

        helper.setParams(component, helper, event.getParam('arguments').params);
    },

    handleCancel : function (component, event, helper) {
        
        helper.showAndHideModal(component, helper);
    },

    handleSuccess: function(component, event, helper) {

        helper.savedSuccessfully(component, event, helper);
    },
})
