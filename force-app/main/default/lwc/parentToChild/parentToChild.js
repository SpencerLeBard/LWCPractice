import { LightningElement, track, api } from 'lwc';

export default class ParentToChild extends LightningElement {

  //NOTE Parent to child communication is done via data binding properties via @api

  @api textFromParent = 'Hello from parent component';

  @track messageFromChild = '';

  handleChildEvent(event) {
    this.messageFromChild = event.detail.data;
  }
}
