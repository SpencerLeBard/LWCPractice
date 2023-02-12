import { LightningElement, track, wire } from 'lwc';
import contactQuery from '@salesforce/apex/QueryContacts.contactQuery';

const columns = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
];

const DELAY = 300;

export default class SearchBox extends LightningElement {


    @track contactsList;
    @track contact;
    @track arr = [];
    @track columns = columns;
    @track contactInput = '';

    @wire(contactQuery , {contactInput: '$contactInput'})
    getContacts({ data, error }) {
        if(data){
        this.contactsList = data
        for(let contact of this.contactsList){
            this.arr.push(contact)
            console.log(arr)
        }
        } else if (error){
            this.error = error  
        }
    }
  


        handleTyping(event) {
            window.clearTimeout(this.delayTimeout);
            const contactInput = event.target.value;
            this.delayTimeout = setTimeout(() => {
                this.contactInput = contactInput;
                console.log('contactInput: '+ contactInput)
            }, DELAY);
    }

}