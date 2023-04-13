import { LightningElement, track, wire } from 'lwc';
import getFavoritePlayerPicklistValues from '@salesforce/apex/customSoccerMdtController.getFavoritePlayerPicklistValues';

export default class CustomMetadataTypesDropdown extends LightningElement {
    @track favPlayers = [];
    @track data;
    @track error;

@wire(getFavoritePlayerPicklistValues)
getFavPlayer({ data, error }) {
  if (data) {
    for(let i = 0; i <= 1; i++){
      let player = data[i];
      console.log({label: player, value: `${player + i}`})
      this.favPlayers.push({label: player, value: `${player + i}`});
      console.log(this.favPlayers);
    }
  } else if (error) {
    this.error = error;
  }
}


    get options() {
      return this.favPlayers;
    }
    
}


  // import { getFavoriteTeamPicklistValues } from '@salesforce/apex/customSoccerMdtController.getFavoriteTeamPicklistValues';

