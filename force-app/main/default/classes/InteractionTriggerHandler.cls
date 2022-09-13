public with sharing class InteractionTriggerHandler {
    public static void isBeforeUpdate(List<Interaction__c> intList){
        System.Debug('isBeforeUpdate');
    }
}
