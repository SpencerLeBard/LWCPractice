public class API_authorizeDotNet {
	//add website to remote site settings
    
    //holds login settings
    public static string APILOGIN;
    public static string APITRANSKEY;
    
    public static void getAuthNetCreds(){
        Authorize_Net_Setting__c apiloginSetting = Authorize_Net_Setting__c.getInstance('API Login');
        Authorize_Net_Setting__c apitranskeySetting = Authorize_Net_Setting__c.getInstance('TransKey');
        //System.debug('apiloginSetting' + apiloginSetting);
        //System.debug('apitranskeySetting' + apitranskeySetting);
        APILOGIN=apiloginSetting.Value__c;
        APITRANSKEY=apitranskeySetting.Value__c; 
        System.debug('APILOGIN' + APILOGIN);
        System.debug('APITRANSKEY' + APITRANSKEY);
    }
    
    //method expecting parameter of type requestwrapper - wrapper converts input types into objects
    public static authNetResp_Wrapper authdotnetCharge(authnetreq_wrapper input){
        
        getAuthNetCreds();
        
        //construct request
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://test.authorize.net/gateway/transact.dll'); //test endpoint url(free)
        req.setMethod('POST');
            
        //build message
        Map<String,String> messageString = new Map<String,String>();
        messageString.put('x_login' , APILOGIN);
        messageString.put('x_login' , APITRANSKEY);
        messageString.put('x_version' , '3.1');
        messageString.put('x_delim_data' , 'TRUE'); 
        //specifiy delimiter char for response
        messageString.put('x_delim_char' , ';');
        messageString.put('x_relay_response' , 'FALSE');
        //type of transaction
        messageString.put('x_type' , 'AUTH_CAPTURE');
        messageString.put('x_method' , 'CC');
            
        //transaction specific
        messageString.put('x_card_num' , input.ccnum); 
        messageString.put('x_exp_date' , input.ccexp);
        messageString.put('x_card_code' , input.ccsec);
        
        //transaction amount
        messageString.put('x_amount' , input.amt);
        
        //description
        messageString.put('x_description' , 'Your Transaction' + input.ordername);
        
        //billing info
        messageString.put('x_first_name' , input.firstname);
        messageString.put('x_last_name' , input.lastname);
        messageString.put('x_address' , input.billstreet);
        messageString.put('x_city' , input.billcity);
        messageString.put('x_state' , input.billstate);
        messageString.put('x_zip' , input.billzip);
        
        //encode the message components
        String encodedMsg = '';
        //keySet() = keys of message string
        for(string s: messageString.keySet()){
            String v = messageString.get(s);
            
            //fix null values
            if(string.isBlank(v)){
                v = '';
            }
            else {
                encodedMsg += s + '=' + EncodingUtil.urlEncode(v , 'UTF-8')+ '&';
            }
        }
        
        //send and message termination
        encodedMsg += 'endofdata';
        system.debug('Encoded Message ' + encodedMsg);
        req.setBody(encodedMsg);
        
        //collect the response
        Http http = new Http();
        //store response into string variable res
        String res = http.send(req).getBody();
        //response will come with lots of info and fields, divided by ';'
        system.debug('Responce from Auth.net' + res);
        
        //split responce by delimiter - convert to something better
        list<String> responses = res.split(';');
        //parse response into wrapper
        authNetResp_Wrapper parsedResponse = parseIntoResponseWrapper(responses);
        return parsedResponse;
              
	}
    		//takes in type list of string and converts into type response wrapper
    public static authNetResp_Wrapper parseIntoResponseWrapper(List<String> input){
        authNetResp_Wrapper temp = new authNetResp_Wrapper();
        temp.responseCode = input[0];
        temp.responseSubCode = input[1];
        temp.responseReasonCode = input[2];
        temp.responseReasonText = input[3];
        temp.authorizationCode = input[4];
        temp.AVSRespose = input[5];
        temp.transactionID = input[6];
        temp.invoiceNumber = input[7];
        temp.description = input[8];
        temp.amount = input[9];
        temp.method = input[10];
        temp.transactionType = input[11];
        temp.customerID = input[12];
        temp.firstName = input[13];
        temp.lastName = input[14];
        temp.company = input[15];
        temp.address = input[16];
        temp.city = input[17];
        temp.state = input[18];
        temp.ZIPcode = input[19];
        temp.country = input[20];
        temp.phone = input[21];
        temp.fax = input[22];
        temp.emailAddress = input[23];
        temp.shipToFirstName = input[24];
        temp.shipToLastName = input[25];
        temp.shipToCompany = input[26];
        temp.shipToAddress = input[27];
        temp.shipToCity = input[28];
        temp.shipToState = input[29];
        temp.shipToZipCode = input[30];
        temp.shipToCountry = input[31];
        temp.tax = input[32];
        temp.duty = input[33];
        temp.freight = input[34];
        temp.taxExempt = input[35];
        temp.purchaseOrderNumber = input[36];
        temp.MD5Hash = input[37];
        temp.cardCodeResponse = input[38];
        temp.CardHolderAuthenticationVerificationResponse = input[39];
        temp.accountNumber = input[40];
        temp.cardType = input[41];
        temp.splitTenderID = input[42];
        temp.requestedAmount = input[43];
        temp.balanceOnCard = input[44];
        return temp;
    }
    
    public class authnetreq_wrapper{
        public string ordername {get;set;}
        public string ccsec {get;set;}
        public string ccnum {get;set;}
        public string ccexp {get;set;}
        public string amt {get;set;}
        public string firstname {get;set;}
        public string lastname {get;set;}
        public string billstreet {get;set;}
        public string billcity {get;set;}
        public string billstate {get;set;}
        public string billzip {get;set;}
        public string transid {get;set;}
        public string routingnumber {get;set;}
        public string accountnumber {get;set;}
        public string bankaccounttype {get;set;}
        public string bankname {get;set;}
        public string bankaccountname {get;set;}
        public string balanceOnCard {get;set;}
        
        public authnetreq_wrapper(){
            
        }
    }
    
    public class authNetResp_Wrapper{
        
        public string responseCode {get; set;}
        public string responseSubCode {get; set;}
        public string responseReasonCode {get; set;}
        public string responseReasonText {get; set;}
        public string authorizationCode {get; set;}
        public string AVSRespose {get; set;}
        public string transactionID {get; set;}
        public string invoiceNumber {get; set;}
        public string description {get; set;}
        public string amount {get; set;}
        public string method {get; set;}
        public string transactionType {get;set;}
        public string customerID {get; set;}
        public string firstName {get; set;}
        public string lastName {get; set;}
        public string company {get; set;}
        public string address {get; set;}
        public string city {get; set;}
        public string state {get; set;}
        public string ZIPcode {get; set;}
        public string country {get; set;}
        public string phone {get; set;}
        public string fax {get; set;}
        public string emailAddress {get; set;}
        public string shipToFirstName {get; set;}
        public string shipToLastName {get; set;}
        public string shipToCompany {get; set;}
        public string shipToAddress {get; set;}
        public string shipToCity {get; set;}
        public string shipToState {get; set;}
        public string shipToZipCode {get; set;}
        public string shipToCountry {get; set;}
        public string tax {get; set;}
        public string duty {get; set;}
        public string freight {get; set;}
        public string taxExempt {get; set;}
        public string purchaseOrderNumber {get; set;}
        public string MD5Hash {get; set;}
        public string cardCodeResponse {get; set;}
        public string CardHolderAuthenticationVerificationResponse {get; set;}
        public string accountNumber {get; set;}
        public string cardType {get; set;}
        public string splitTenderID {get; set;}
        public string requestedAmount {get; set;}
        public string balanceOnCard {get; set;}
        
        public authNetResp_Wrapper(){
            
        }
        
        
        
    }
}