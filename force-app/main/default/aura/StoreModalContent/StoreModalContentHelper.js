({

    setParams : function(component, helper, data) {
       
        helper.setFieldsDataSet(component, helper, data);

        helper.showAndHideModal(component, helper);
    },

    savedSuccessfully : function(component, event, helper) {
        let record = event.getParams();
        let actionType = component.get('v.actionType');

        if (actionType === 'AddNewOrder') {
            
            actionType = 'AddNewPartOrder';
            component.set('v.actionType', actionType);
            component.set('v.clientOrderId', record.response.id);
            let targetId = component.get('v.clientId');
            helper.setFieldsDataSet(component, helper, {actionType, targetId});


            
        } else {
            let item = (actionType === 'AddNewCar')? 'Car' : (actionType === 'AddNewPartOrder')? 'Part' : 'Order';
            
            helper.showToast('success', 'New '+ item +' Added', 'New '+ item +' Added Successfully');
            helper.showAndHideModal(component, helper);
            
            helper.fireComponentEvent(component, helper, 'RefreshClientsData', {targetId : component.get('v.clientId')});
        }

    },

    fireComponentEvent : function(component, helper, eventName, dataObject) {

        let compEvent = component.getEvent(eventName);
        compEvent.setParams({'params' : dataObject});
        compEvent.fire();
    },

    showAndHideModal : function(component, helper){
        component.set('v.showModal', !component.get('v.showModal'));
    },

    setFieldsDataSet : function (component, helper, data) {
        let fields;
        let objectApiName;
        if (data.actionType === 'AddNewCar') {
            
            fields = [
                'Client__c',
                'Car__c',
                'Car_Type__c',
                'Color__c',
                'Gearbox__c'
            ];

            objectApiName = 'Client_Cars__c';
        }
        else if (data.actionType === 'AddNewOrder') {
            fields = [
                'Client__c',
                'Order_Description__c'
            ];

            objectApiName = 'Client_Order__c';
        }
        else if (data.actionType === 'AddNewPartOrder') {
            fields = [
                'Client_Order__c',
                'Part__c',
                'Quantity__c'
            ];

            if (data.hasOwnProperty('orderId')) {
            
                component.set('v.clientOrderId', data.orderId);
            }

            objectApiName = 'Part_Order__c';
        }

        component.set('v.actionType', data.actionType);
        component.set('v.clientId', data.targetId);
        component.set('v.objectApiName', objectApiName);
        component.set('v.fields', fields);
    },

    showToast : function(type, title, msg) {
        let toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title: title,
            message: msg,
            duration: '3000',
            type: type,
            mode: 'dismissible'
        });
        toastEvent.fire();
    }
})
