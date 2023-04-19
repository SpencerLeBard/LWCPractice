import { LightningElement, track, wire } from 'lwc';
import getFavoritePlayerPicklistValues from '@salesforce/apex/customSoccerMdtController.getFavoritePlayerPicklistValues';
import  getFavoriteTeamPicklistValues  from '@salesforce/apex/customSoccerMdtController.getFavoriteTeamPicklistValues';


export default class CustomMetadataTypesDropdown extends LightningElement {
    @track favPlayers = [];
    @track favTeams = [];
    @track data;
    @track error;

@wire(getFavoritePlayerPicklistValues)
getFavPlayer({ data, error }) {
  if (data) {
    for(let i = 0; i <= data.length - 1; i++){
      let player = data[i];
      // console.log({label: player, value: `${player + i}`})
      this.favPlayers.push({label: player, value: `${player + i}`});
      this.favPlayers[i].label = player;
      this.favPlayers[i].value = `${player + i}`;
      // console.log(this.favPlayers[i].label , this.favPlayers[i].value);
    }
  } else if (error) {
    this.error = error;
  }
}

@wire(getFavoriteTeamPicklistValues)
getFavTeam({ data, error }) {
  if (data) {
    for(let i = 0; i <= data.length - 1; i++){
      let team = data[i];
      // console.log({label: team, value: `${team + i}`})
      this.favTeams.push({label: team, value: `${team + i}`});
      this.favTeams[i].label = team;
      this.favTeams[i].value = `${team + i}`;
      // console.log(this.favTeams[i].label , this.favTeams[i].value);
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

handleChangePlayer(event) {
  this.selectedPlayer = event.detail.value;
    // console.log('Selected player:', this.selectedPlayer);
}

get teamOptions() {
  return this.favTeams.map(team => {
      return { label: team.label, value: team.value };
  });
}

handleChangeTeam(event) {
  this.selectedTeam = event.detail.value;
    // console.log('Selected Team:', this.selectedTeam);
}

    
}



