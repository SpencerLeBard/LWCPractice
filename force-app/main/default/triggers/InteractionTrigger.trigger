trigger InteractionTrigger on Interaction__c (after update) {
    if(Trigger.isAfter && Trigger.isUpdate){
        InteractionTriggerHandler.isAfterUpdate(Trigger.new);
    }
}