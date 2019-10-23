({
    setClient : function(component, helper, value) {

        if (value && value.client) {
            component.set('v.clientContent', value.client);
            
        }
    },


    setNewClientItem : function(component, helper, data) {

        helper.fireComponentEvent(component, helper, 'SetNewClientItem', data);
    },

    fireComponentEvent : function(component, helper, eventName, dataObject) {

        let compEvent = component.getEvent(eventName);
        compEvent.setParams({'params' : dataObject});
        compEvent.fire();
    }
})
