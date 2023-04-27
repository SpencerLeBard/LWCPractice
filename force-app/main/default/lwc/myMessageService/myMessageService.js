import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
// import MESSAGE_CHANNEL from '@salesforce/messageChannel/MyMessageChannel__c';


export default class MyMessageService extends LightningElement {

  @wire(MessageContext)
  messageContext;

  handleClick() {
    const message = {
      data: 'Hello from LWC'
    };
    publish(this.messageContext, MESSAGE_CHANNEL, message);
  }


}