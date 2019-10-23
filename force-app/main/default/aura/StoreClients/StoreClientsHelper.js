({
    setClientsAttribute : function(component, helper, values) {
        
        if (values && values.clients) {
            component.set('v.clients', values.clients);
        }
    },

    fireComponentEvent : function(component, helper, eventName, dataObject) {

        let compEvent = component.getEvent(eventName);
        compEvent.setParams({'params' : dataObject});
        compEvent.fire();
    }
})
