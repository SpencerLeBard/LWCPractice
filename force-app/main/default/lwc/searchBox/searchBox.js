import { LightningElement, track, wire } from 'lwc';
import contactQuery from '@salesforce/apex/QueryContacts.contactQuery';

const columns = [
    { label: 'Id' , fieldName: 'Id'} ,
    { label: 'First Name' , fieldName: 'FirstName'} ,
    { label: 'Last Name' , fieldName: 'LastName'} ,
]; 
export default class SearchBox extends LightningElement {


    @track contactList;
    @track contact;
    @track data = [];
    @track columns = columns;
    @track param = ''
    @track clickedButtonLabel;

    @track contactArr = [];
    
    //need to handle this click through a method
    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
        console.log('click in search box')
    }

    // TODO : Apparently this wire method fires as it renders like a connected callback
    // but does not do anything when i click the button :(
    @wire(contactQuery , {contactInput: '$param'})
    getContact({data, error}){
        console.log('hit getcontact method')
        if(data){
            this.contactList = data.data
            console.log('has data')
        }else if (error){
            this.error = error
            console.error(this.error)
        }
    }

}