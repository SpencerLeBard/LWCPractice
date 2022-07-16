import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ASS_OBJECT from '@salesforce/schema/Asset';
import NAME_FIELD from '@salesforce/schema/Asset.Name';
//import OWNER_EMAIL_FIELD from '@salesforce/schema/Account.Owner.Email';

export default class assetComponent extends LightningElement {
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
    assObject = ASS_OBJECT;

    /* Load Asset.Name for custom rendering */
    @wire(getRecord, { recordId: '$currentRecordId', fields: [NAME_FIELD,
         //OWNER_EMAIL_FIELD
        ] })
    record;

    /** Get the Asset.Name value. */
    get nameValue() {
        console.log('getting name: '+ NAME_FIELD)
        return this.record.data ? getFieldValue(this.record.data, 'Asset.Name') : '';
    }
}