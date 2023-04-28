import { LightningElement, track, api } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from "lightning/messageService";
import ACCOUNT_CHANNEL from "@salesforce/messageChannel/AccountDataMessageChannel__c";

export default class ParentToChild extends LightningElement {

  //NOTE Parent to child communication is done via data binding properties via @api

  @api getValueFromParent = 'Hello from parent component';

  @track messageFromChild;

  handleChildEvent(event) {
    console.log('message recived by parent: ' + event.detail.data)
    this.messageFromChild = event.detail.data;
  }
  lMCSubscribe(){
    this.subscription = subscribe(
      this.messageContext,
      ACCOUNT_CHANNEL,
      (message) => this.handleMessage(message)
    );
  }


}


