import { LightningElement, track, wire } from 'lwc';
import contactQuery from '@salesforce/apex/QueryContacts.contactQuery';

const columns = [
    { label: 'Id' , fieldName: 'Id'} ,
    { label: 'First Name' , fieldName: 'FirstName'} ,
    { label: 'Last Name' , fieldName: 'LastName'} ,
    { label: 'Name' , fieldName: 'Name'}
]; 
export default class SearchBox extends LightningElement {


    @track contactList;
    @track contact;
    @track data = [];
    @track columns = columns;
    @track param = ''
    @track clickedButtonLabel;
    
    //need to handle this click through a method
    handleClick(event) {
        console.log('click')
        this.clickedButtonLabel = event.target.label;
    }

    @wire(contactQuery , {contactInput: '$param'})
    getContact({data, error}){
        if(data){
            this.contactList = data
            console.log(this.contactsList)
        }else if (error){
            this.error = error
            console.error(this.error)
        }
   
    }

}