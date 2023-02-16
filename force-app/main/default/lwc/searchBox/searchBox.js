import { LightningElement, track, wire } from 'lwc';
import contactQuery from '@salesforce/apex/QueryContacts.contactQuery';


const columns = [
    { label: 'id', fieldName: 'id' },
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
];

export default class SearchBox extends LightningElement {


    @track contactInput = '';
    @track contacts;

    

    @wire(contactQuery , {contactInput: '$contactInput'})
        contacts;
  
        handleTyping(event) {
            window.clearTimeout(this.delayTimeout);
            const contactInput = event.target.value;
            this.delayTimeout = setTimeout(() => {
                this.contactInput = contactInput;
                this.getContacts(contactInput)
            }, 300);
    }

}