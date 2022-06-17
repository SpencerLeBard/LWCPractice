public class AccountLookup {
    public static List<Account> JohnAccountsLookup(string search){
        List<Account> accounts = new List<Account>([SELECT Name , Id FROM Account]); 
            for(Account a: accounts){
                if(a.Name == 'john'){
                    // accounts.add(a); why not need accounts.add ??
                    system.debug(a);
                    
    }
                
}
        return accounts;
}
}