import { LightningElement, track, wire } from 'lwc';
import accountQuery from '@salesforce/apex/QueryAccounts.accountQuery';


export default class ShowAccountsFromApex extends LightningElement {
    accountsList = [];
    @track accounts;


    @wire(accountQuery)
    getAccounts({ data, error }) {
        if(data){
        //NOTE this displays 'john' : this.accountsList = data[0].Name
        //console.log(this.accountsList)

        this.accountList = data
        for(let accounts of this.accountList){
            console.log(accounts.Name)
        }

        } else if (error){
            this.error = error        
        }
    }

}