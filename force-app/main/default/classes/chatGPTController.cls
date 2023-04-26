public with sharing class chatGPTController {

@AuraEnabled(cacheable=true)
public static String chatGPTResponse(){
    String apiKey = [SELECT Key__c FROM OpenAPIKey__c LIMIT 1].Key__c;
    String orgID = 'org-cPUNw2Fgkyun710WHvW6cZ23';
    Http http = new Http();
    HttpRequest req = new HttpRequest();
    req.setEndpoint('https://api.openai.com/v1/chat/completions');
    req.setMethod('POST');
    req.setHeader('Content-Type', 'application/json');
    req.setHeader('Authorization', 'Bearer ' + apiKey);

    String requestBody = '{"model": "davinci", "prompt": "print hello world in python", "temperature": 0.7, "max_tokens": 64, "n": 1, "stop": ["\\n"] }';

    req.setBody(requestBody);


    HTTPResponse res = http.send(req);
    System.debug(res.getBody());
    return res.getBody();
    }   
}



