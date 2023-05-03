public class MapPractice {
    public static void mapMethod(){ 
    Map<id, Account> accountMap = new Map<id, Account>([SELECT id, name FROM Account]);
        System.debug(accountMap);
    }
}