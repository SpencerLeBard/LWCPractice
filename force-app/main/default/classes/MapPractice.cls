public class MapPractice {
    public static Map<Id,Account> practiceMap(){
        List<Account> accountList = [SELECT Id, Name FROM Account];
        Map<Id, Account> accountMap = new Map<Id, Account>(accountList);
        System.debug(accountMap);
        return accountMap;
    } 
}