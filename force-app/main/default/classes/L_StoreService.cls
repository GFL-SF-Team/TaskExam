public with sharing class L_StoreService {

    public static String currentSObjectAPIName;

    public static Contact[] getClientsWithCarsAndOrders() {
        return [
            SELECT Id, Name,
            (SELECT Id, Car__r.Brand__c, Car_Type__c, Car__r.Model__c FROM Client_Cars__r),
            (SELECT Id, Name, Order_Description__c, Total_Order_Price__c FROM Client_Order__r)
            FROM Contact
            LIMIT 1000
        ];
    }

    public static Contact[] getClientWithCarsAndOrders(Id clientId) {
        return [
            SELECT Id, Name,
            (SELECT Id, Car__r.Brand__c, Car_Type__c, Car__r.Model__c FROM Client_Cars__r),
            (SELECT Id, Name, Order_Description__c, Total_Order_Price__c FROM Client_Order__r)
            FROM Contact
            WHERE Id = :clientId
        ];
    }

    public static L_StoreHelper.WrapClient[] createWrapClients(Contact[] clients) {
        L_StoreHelper.WrapClient[] wrapClients = new L_StoreHelper.WrapClient[]{};

        for (Contact client : clients) {
            L_StoreHelper.WrapClient wrapClient = new L_StoreHelper.WrapClient(
                client.Id, 
                client.Name,
                createWrapCars(client.Client_Cars__r),
                createWrapClientOrders(client.Client_Order__r)
            );

            wrapClients.add(wrapClient);
        }

        return wrapClients;
    }

    public static Part_Order__c[] getPartOrdersByClientOrderId(Id clientOrderId) {
        return [
            SELECT Id, Name, Client_Order__r.Name, Part__r.Name
            FROM Part_Order__c
            WHERE Client_Order__c = :clientOrderId
        ];
    }

    private static L_StoreHelper.WrapCar[] createWrapCars(Client_Cars__c[] clientCars) {
        L_StoreHelper.WrapCar[] cars = new L_StoreHelper.WrapCar[]{};

        for (Client_Cars__c clientCar : clientCars) {

            cars.add(new L_StoreHelper.WrapCar(
                clientCar.Id,
                clientCar.Car__r.Brand__c,
                clientCar.Car__r.Model__c,
                clientCar.Car_Type__c
            ));
        }

        return cars;
    }

    private static L_StoreHelper.WrapClientOrder[] createWrapClientOrders(Client_Order__c[] clientOrders) {
        L_StoreHelper.WrapClientOrder[] orders = new L_StoreHelper.WrapClientOrder[]{};

        for (Client_Order__c clientOrder : clientOrders) {

            orders.add(new L_StoreHelper.WrapClientOrder(
                clientOrder.Id,
                clientOrder.Name,
                clientOrder.Order_Description__c,
                clientOrder.Total_Order_Price__c
            ));
        }

        return orders;
    }

    private static String getSObjectAPINameById(Id sObjectId) {
        String sObjectAPIName;

        if (sObjectId != null) {
            sObjectAPIName = String.valueOf(sObjectId.getSobjectType());
        }

        return sObjectAPIName;
    }
}
