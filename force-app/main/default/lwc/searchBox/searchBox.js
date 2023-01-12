import { LightningElement, track, wire } from 'lwc';
import contactQuery from '@salesforce/apex/QueryContacts.contactQuery';

export default class SearchBox extends LightningElement {

    @track contactList
    @track contact

    @wire(contactQuery)
    getContact({data, error}){
        if(data){
            this.contactList = data
        }else if (error){
            this.error = error
        }
   
    }

    @track clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
}