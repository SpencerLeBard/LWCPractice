trigger MakeFavoriteAssSpencer on Asset (before insert) {
	for(Asset assOnSave: Trigger.new){
assOnSave.Favorite_Ass__c = 'Spencer,';
	}
}