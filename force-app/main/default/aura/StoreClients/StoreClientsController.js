({
    handleClients : function(component, event, helper) {
        
        helper.setClientsAttribute(component, helper, event.getParam('arguments'));
    },

    handleSelect : function(component, event, helper) {

        helper.fireComponentEvent(component, helper, 'SelectedIdEvent', {clientId : event.getParams().name})
    }
})
