trigger AccountTrigger on Account (before update) {
  if(Trigger.isAfter && Trigger.isInsert)
    for(Account a : Trigger.new){
        a.Name = 'Test';
    }
}