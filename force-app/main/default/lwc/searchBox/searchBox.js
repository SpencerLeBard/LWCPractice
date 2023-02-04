import { LightningElement, track, wire } from 'lwc';
import contactQuery from '@salesforce/apex/QueryContacts.contactQuery';

const columns = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
];
export default class SearchBox extends LightningElement {


    @track contactsList;
    @track contact;
    @track data = [];
    @track columns = columns;
    @track param = ''
    @track clickedButtonLabel;

    @track contactArr = [];
    
    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
        //console.log('click in search box')
        
    }

    handleTyping(event) {
        window.clearTimeout(this.delayTimeout);
        const contactInput = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.contactInput = contactInput;
        }, DELAY);
    }

    // TODO : Apparently this wire method fires as it renders like a connected callback
    // but does not do anything when i click the button :(
    @wire(contactQuery , {contactInput: '$contactInput'})
    getContact({data, error}){
        // console.log('hit getcontact method')
        if(data){
            this.contactsList = data
            // console.log('has data')
        }else if (error){
            this.error = error
            console.error(this.error)
        }
    }

}