public with sharing class InteractionTriggerHandler {
    public static void isBeforeUpdate(List<Interaction__c> intList){
        List<Contact> conList = new List<Contact>([SELECT id, Name FROM Contact]);
        for(Interaction__c i : intList){
            for(Contact c : conList){
                if(c.name == i.Attendees__c){
                    i.Logger__c = 'found';
            }
         }
      }
   }
}