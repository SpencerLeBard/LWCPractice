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
    @track columns = columns;
    @track contactInput = '';

    
    // TODO : throws error right when I start typing
    @wire(contactQuery , {contactInput: '$contactInput'})
        contactsList;

        handleTyping(event) {
            console.log('typing...')
            window.clearTimeout(this.delayTimeout);
            const contactInput = event.target.value;
            this.delayTimeout = setTimeout(() => {
                this.contactInput = contactInput;
                console.log(contactInput)
            }, DELAY);
    }

}