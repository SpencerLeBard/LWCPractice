public class QueryContacts {
	@AuraEnabled(cacheable=true)
    public static List<Contact> contactQuery(String contactInput){
        String filter = '%' + contactInput + '%';
        List<Contact> contactList = [
            SELECT id, FirstName, LastName , Name
            FROM Contact 
            WHERE Name 
            LIKE :filter
        ];
			System.debug(contactList);
			return contactList;
    }
}