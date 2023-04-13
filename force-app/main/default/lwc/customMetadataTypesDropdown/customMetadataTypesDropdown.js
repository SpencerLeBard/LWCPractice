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
      // console.log({label: player, value: `${player + i}`})
      this.favPlayers.push({label: player, value: `${player + i}`});

      //NOTE this.favPlayer is returning a proxy object and i can't figure out how to drill into the data

      this.favPlayers[i].label = player;
      this.favPlayers[i].value = `${player + i}`;

      // console.log(this.favPlayers[i].label , this.favPlayers[i].value);
    }
  } else if (error) {
    this.error = error;
  }
}
get playerOptions() {
  return this.favPlayers.map(player => {
      return { label: player.label, value: player.value };
  });
}

handleChange(event) {
  this.selectedPlayer = event.detail.value;
    // console.log('Selected player:', this.selectedPlayer);
}

    
}


  // import { getFavoriteTeamPicklistValues } from '@salesforce/apex/customSoccerMdtController.getFavoriteTeamPicklistValues';

