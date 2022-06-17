public class StringArrayTest {
    public static void practiceQuery(){
            List<Account> ls = [select Id,Name from Account];
    		Map<Id, Account> m = new Map<Id, Account>();
            System.debug(m);

    }
}