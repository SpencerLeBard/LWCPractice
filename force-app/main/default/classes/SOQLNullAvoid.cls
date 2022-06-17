public class SOQLNullAvoid {
	public static void soqlNullValueAvoidenceNotFlagged(){
    Map<Id, Account> accountMap = new Map<Id, Account>([SELECT Id, NAME from Account]);
    System.Debug(accountMap);
	}
}