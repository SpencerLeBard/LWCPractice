import { LightningElement, track, wire } from 'lwc';
import accountQuery from '@salesforce/apex/QueryAccounts.accountQuery';


export default class ShowAccountsFromApex extends LightningElement {
    accountsList = [];
    @track accounts;

connectedCallback(){}
    @wire(accountQuery)
    getAccounts({ data, error }) {
        if(data){
        this.accountList = data
        for(let accounts of this.accountList){
            console.log(accounts.Name)
            this.accountsList.push(accounts)
        }

        } else if (error){
            this.error = error  
            console.log(this.error)      
        }
    }
}