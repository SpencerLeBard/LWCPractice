import { LightningElement, track, wire } from 'lwc';
import contactQuery from '@salesforce/apex/QueryContacts.contactQuery';

export default class SearchBox extends LightningElement {

    @track contactList
    @track contact

    @wire(contactQuery)
    getContact({data, error}){
        if(data){
            this.accountList = data
        }else if (error){
            this.error = error
        }
   
    }
}