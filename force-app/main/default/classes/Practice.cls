public class Practice  {
    public static List<Account> getSomeRecords(){
        List<Account> acctList = new List<Account>();
        List<Account> acctList = [SELECT Id, Name, Type, BillingCity FROM Account WHERE BillingCity = 'Tucson'];
        for(Account a : acctList){
            a.Name = 'Test';
        }
        update acctList;
    }

}