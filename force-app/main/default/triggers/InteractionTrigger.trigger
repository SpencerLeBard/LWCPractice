trigger InteractionTrigger on Interaction__c (before insert, before update) {
    if(Trigger.isBefore && Trigger.isUpdate){
        InteractionTriggerHandler.isBeforeUpdate(Trigger.new);
    }
}