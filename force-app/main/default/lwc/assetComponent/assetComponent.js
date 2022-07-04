import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Asset.Name';
// import TITLE_FIELD from '@salesforce/schema/Asset.Title';
// import PHONE_FIELD from '@salesforce/schema/Asset.Phone';
// import EMAIL_FIELD from '@salesforce/schema/Asset.Email';
// import PICTURE_FIELD from '@salesforce/schema/Asset.Picture__c';

const fields = [
    NAME_FIELD,
    // TITLE_FIELD,
    // PHONE_FIELD,

];

export default class AssetComponent extends LightningElement {
    @api asset;

    @wire(getRecord, { recordId: '$recordId', fields }) asset;

    get name() {
        return getFieldValue(this.asset.data, NAME_FIELD);
    }

    // get title() {
    //     return getFieldValue(this.asset.data, TITLE_FIELD);
    // }

    // get phone() {
    //     return getFieldValue(this.asset.data, PHONE_FIELD);
    // }

}