public class SearchAccounts {
    public static List<Account> accountJohn(){
        List<Account> johnsacct = new List<Account>();
        List<Account> accounts = [SELECT Name , Id FROM Account];
            for(Account a: accounts){
                if(a.name == 'john'){
                    johnsacct.add(a);
                    system.debug(a);
                }
            } 
        return johnsacct;
    }
}