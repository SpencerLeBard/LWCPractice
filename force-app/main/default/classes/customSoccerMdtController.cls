public with sharing class customSoccerMdtController {
    @AuraEnabled(cacheable=true) 
    public static List<String> getFavoritePlayerPicklistValues() {
              List<String> playersPicklist = new List<String>();
              Schema.DescribeFieldResult field = Soccer__mdt.Favorite_Player__c.getDescribe();        
              for (Schema.PicklistEntry f : field.getPicklistValues()){
                playersPicklist.add(f.getLabel());        
                }
                System.debug(playersPicklist);
                return playersPicklist;   
            }
    @AuraEnabled(cacheable=true) 
    public static List<String> getFavoriteTeamPicklistValues() {
              List<String> teamPicklist = new List<String>();
              Schema.DescribeFieldResult field = Soccer__mdt.Favorite_Team__c.getDescribe();        
              for (Schema.PicklistEntry f : field.getPicklistValues()){
                teamPicklist.add(f.getLabel());        
                }
                System.debug(teamPicklist);
                return teamPicklist; 
            }
        } 

