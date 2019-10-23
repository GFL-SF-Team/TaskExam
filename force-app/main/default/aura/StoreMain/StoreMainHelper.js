({
    initComponent : function(component, helper) {

        helper.sendPromiseRequest(component, 'getDataForComponent')
        .then((response) => {

            helper.responseHandler(component, helper, response);
        })
        .catch((errors) => {
            console.log('Error');
            console.log(errors);
        });


    },

    getClientData : function(component, helper, params) {
        
        helper.sendPromiseRequest(component, 'getClientDataForComponent', params)
        .then((response) => {

            helper.updateClientInBundle(component, helper, response.clients[0]);
            
        })
        .catch((errors) =>  {
            console.log('Error');
            console.log(errors);
        });
        
    },

    updateClientInBundle : function(component, helper, newClient) {
        let dataBundle = component.get('v.dataBundle');

        dataBundle.clients.find((client, index, clientsArray) =>{
            if(client.clientId === newClient.clientId) {
                clientsArray[index] = newClient;
            }
        });

        component.set('v.dataBundle', dataBundle);
        
        helper.sendDataToDetailSection(component, helper, newClient.clientId);
    },

    setNewItem : function(component, helper, data) {
        let modal = component.find('StoreModalContent');
        modal.setModal(data);
    },

    responseHandler : function(component, helper, response) {
        component.set('v.dataBundle', response);
        component.find('storeClientComponent').setClients(response.clients);
    },

    sendDataToDetailSection : function(component, helper, clientId) {
        let clients = component.get('v.dataBundle').clients;
        let client = clients.find(client => client.clientId === clientId);
        
        if (client) {
            component.find('storeDetailsComponent').setClient(client);
        }
    },

    sendPromiseRequest : function(component, apexMethodName, apexParams) {

        return new Promise((resolve, reject) => {
            if (!apexMethodName) {
                reject(new Error('Invalid apex method name'));
            }

            const action = component.get('c.' + apexMethodName);

            if ($A.util.isObject(apexParams) && Object.keys(apexParams).length !== 0) {
                action.setParams(apexParams);
            }

            action.setCallback(this, (response) => {
                
                if (response.getState() === "SUCCESS") {
                    resolve(response.getReturnValue());
                }
                else if (response.getState() === "INCOMPLETE") {
                    reject(new Error('Response status is "INCOMPLETE"'));
                }
                else if (response.getState() === "ERROR") {
                    reject(response.getError());
                }

            });

            $A.enqueueAction(action);

        });
    }
})
