import { LightningElement, track, api } from 'lwc';

export default class ParentToChild extends LightningElement {

  //NOTE Parent to child communication is done via data binding properties via @api

  @api getValueFromParent = 'Hello from parent component';

  @track messageFromChild;

  handleChildEvent(event) {
    console.log('message recived by parent: ' + event.detail.data)
    this.messageFromChild = event.detail.data;
  }
}