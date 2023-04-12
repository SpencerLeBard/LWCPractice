public class QueryAccounts {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> accountQuery(){
      List<Account> accountList = [SELECT id, Name FROM Account];
        System.debug(accountList);
        return accountList;
    }
    
}