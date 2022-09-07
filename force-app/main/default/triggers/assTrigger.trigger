trigger assTrigger on Asset (before insert) {
    for(Asset a : Trigger.new) {
        if(a.Name == 'Test') {
            a.Name = 'Test2';
        }
    }
}