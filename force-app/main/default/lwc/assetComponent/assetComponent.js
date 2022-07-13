import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Asset.Name';

//NOTE need to create apex class that grabs assets and field names and then i can display


export default class AssetComponent extends LightningElement {
    @api asset;

    @wire(getRecord, { recordId: '$recordId', NAME_FIELD }) asset;

    get assetName() {
        return getFieldValue(this.asset.data, NAME_FIELD);
    }

        connectedCallback(){
        console.log(this.AssetName())
    }


}