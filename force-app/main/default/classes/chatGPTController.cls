public with sharing class chatGPTController {

@AuraEnabled(cacheable=true)
public static string chatGPTResponse(string message){
    String key = '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';
    String orgID = 'org-cPUNw2Fgkyun710WHvW6cZ23';
    // Create an HTTP request to the OpenAI API
    Http http = new Http();
    HttpRequest request = new HttpRequest();
    request.setEndpoint('https://api.openai.com/v1/engine/davinci-codex/completions');
    request.setHeader('Content-Type', 'application/json');
    request.setHeader('Authorization', key);
    request.setHeader('OpenAI-Organization', orgID);
    request.setMethod('POST');
    request.setBody('{"prompt": "' + message + '", "max_tokens": 50}');

    // Send the HTTP request and parse the response
    System.debug('Sending HTTP request: ' + request);
    HTTPResponse response = http.send(request);
    System.debug('Received HTTP response: ' + response);
    if (response.getStatusCode() == 200) {
        Map<String, Object> responseMap = (Map<String, Object>)JSON.deserializeUntyped(response.getBody());
        String messages = (String)responseMap.get('choices');
        List<Object> choices = (List<Object>)JSON.deserializeUntyped(messages);
        Map<String, Object> choiceMap = (Map<String, Object>)choices[0];
        String text = (String)choiceMap.get('text');
        System.debug('Response from ChatGPT: ' + text);
        return text;
    } else {
        System.debug('HTTP request failed with status code ' + response.getStatusCode() + ': ' + response.getStatus());
        return null;
        }
    }  
}          
