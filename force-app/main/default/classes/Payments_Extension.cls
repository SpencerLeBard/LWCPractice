public class Payments_Extension {
	//payment__c record var to hold payment information
    public Payment__c thisPayment {get;set;}
    public Statement__c thisStatement {get;set;}
    public Map<Id,String> recordTypeMap {get;set;}
    public boolean success {get;set;}
    
}