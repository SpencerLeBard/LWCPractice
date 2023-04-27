public class PracticeBatch implements Database.Batchable<SObject> {
    public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.Batchable(Datbase.getQueryLocator('SELECT id, name, FROM Account'));
    }

    public void execute(Database.BatchableContext bc, List<Account> scope) {
        for(Account a : scope) {
            a.name = 'Test';
        }
        update scope;
    }

}