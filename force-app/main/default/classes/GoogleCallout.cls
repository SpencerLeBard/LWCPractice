public with sharing class GoogleCallout {

    @AuraEnabled(cacheable=true)
    public static string googleCallout() {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://www.google.com');
        req.setMethod('GET');

        Http http = new Http();
        HttpResponse res = http.send(req);

        if (res.getStatusCode() == 200) {
            System.debug(res.getBody());
            return res.getBody();
        } else {
            return 'Error: ' + res.getStatusCode() + ' - ' + res.getStatus();
        }
    }
}
