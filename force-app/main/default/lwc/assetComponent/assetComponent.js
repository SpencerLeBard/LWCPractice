import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_EMAIL_FIELD from '@salesforce/schema/Account.Owner.Email';

export default class AccountGetRecord extends LightningElement {
    /** Id of record to display. */
    @api recordId;

    currentRecordId

    connectedCallback(){
        console.log('hello')
    }

    handleIdChange(e){
        this.currentRecordId = e.target.value;
    }

    /* Expose schema objects/fields to the template. */
    accountObject = ACCOUNT_OBJECT;

    /* Load Account.Name for custom rendering */
    @wire(getRecord, { recordId: '$currentRecordId', fields: [NAME_FIELD, OWNER_EMAIL_FIELD] })
    record;

    /** Get the Account.Name value. */
    get nameValue() {
        console.log('getting name: '+NAME_FIELD)
        return this.record.data ? getFieldValue(this.record.data, 'Account.Name') : '';
    }
}