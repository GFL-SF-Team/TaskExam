public with sharing class L_StoreHelper {

    public static WrapResponse initDataForComponent(WrapResponse response) {

        Contact[] clients = L_StoreService.getClientsWithCarsAndOrders();
        response.clients = L_StoreService.createWrapClients(clients);

        return response;
    }

    public static WrapResponse getAllClientData(Id clientId, WrapResponse response) {
        Contact[] client = L_StoreService.getClientWithCarsAndOrders(clientId);
        response.clients = L_StoreService.createWrapClients(client);

        return response;
    }



    


    public class WrapResponse {
        @AuraEnabled
        public WrapClient[] clients {get; set;}
    }

    public class WrapClient {
        @AuraEnabled
        public String clientId {get; set;}
        @AuraEnabled
        public String clientName {get; set;}
        @AuraEnabled
        public WrapCar[] cars {get; set;}
        @AuraEnabled
        public WrapClientOrder[] orders {get; set;}

        public WrapClient(String clientId, String clientName,  WrapCar[] cars, WrapClientOrder[] orders) {
            this.clientId = clientId;
            this.clientName = clientName;
            this.cars = cars;
            this.orders = orders;
        }
    }

    public class WrapCar {
        @AuraEnabled
        public String carId {get; set;}
        @AuraEnabled
        public String brand {get; set;}
        @AuraEnabled
        public String model {get; set;}
        @AuraEnabled
        public String type {get; set;}

        public WrapCar(String carId, String brand, String model, String type) {
            this.carId = carId;
            this.brand = brand;
            this.model = model;
            this.type = type;
        }
    }

    public class WrapClientOrder {
        @AuraEnabled
        public String clientOrderId {get; set;}
        @AuraEnabled
        public String clientOrderNumber {get; set;}
        @AuraEnabled
        public String description {get; set;}
        @AuraEnabled
        public Decimal totalPrice {get; set;}

        public WrapClientOrder(String clientOrderId, String clientOrderNumber, String description, Decimal totalPrice) {
            this.clientOrderId = clientOrderId;
            this.clientOrderNumber = clientOrderNumber;
            this.description = description;
            this.totalPrice = totalPrice;
        }

    }

}
