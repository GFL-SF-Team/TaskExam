({
    handleSetClient : function(component, event, helper) {
        helper.setClient(component, helper, event.getParam('arguments'));
    },

    handleSelectCar : function(component, event, helper) {
        console.log('Click');
        
    },
    
    handleAddCar : function(component, event, helper) {

        helper.setNewClientItem(component, helper, {
            targetId : component.get('v.clientContent').clientId, 
            actionType : 'AddNewCar'
        });
    },

    handleAddOrder : function(component, event, helper) {

        helper.setNewClientItem(component, helper, {
            targetId : component.get('v.clientContent').clientId, 
            actionType : 'AddNewOrder'
        });
    },

    handleAddPartToOrder : function(component, event, helper) {

        helper.setNewClientItem(component, helper, {
            targetId : component.get('v.clientContent').clientId, 
            actionType : 'AddNewPartOrder',
            orderId : event.getSource().get('v.value')
        });
        
    }
})