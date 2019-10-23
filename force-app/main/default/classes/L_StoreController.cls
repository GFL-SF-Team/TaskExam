public with sharing class L_StoreController {

    @AuraEnabled
    public static L_StoreHelper.WrapResponse getDataForComponent(){

        return L_StoreHelper.initDataForComponent(new L_StoreHelper.WrapResponse());
    }

    @AuraEnabled
    public static L_StoreHelper.WrapResponse getClientDataForComponent(Id targetId){
        
        return L_StoreHelper.getAllClientData(targetId, new L_StoreHelper.WrapResponse());
    }
}
