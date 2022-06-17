public class QueryPractice {
    public static List<Contact> queryMethod(){
        List<Contact> contactList = new List<Contact>([SELECT name, id FROM Contact]); 
        List<Contact> johnsList = new List<Contact>();
        for(Contact c: contactList){
            if(c.name == 'john'){
                johnsList.add(c);
            }
        }
        system.debug(johnsList);
        return johnsList;
    } 
}