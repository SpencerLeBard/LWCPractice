import { LightningElement, track, wire } from 'lwc';
import accountQuery from '@salesforce/apex/QueryAccounts.accountQuery';


export default class ShowAccountsFromApex extends LightningElement {
    @track accountsList = [];
    @track accounts;
    @track boolCanSee = false;

    changeBoolCanSee(){
        this.boolCanSee = true
    }
    changeBoolCannotSee(){
        this.boolCanSee = false
    }

    @wire(accountQuery)
    getAccounts({ data, error }) {
        if(data){
        this.accountList = data
        for(let account of this.accountList){
            this.accountsList.push(account)
        }
        } else if (error){
            this.error = error  
        }
    }
}