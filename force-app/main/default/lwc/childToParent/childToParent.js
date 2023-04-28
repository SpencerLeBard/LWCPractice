import { LightningElement, api } from 'lwc';

export default class ChildToParent extends LightningElement {

  //NOTE Child to parent communication is done via events

  @api getValueFromParent;

  @api messageFromChild = 'hello from child component';


  handleClick() {
    const event = new CustomEvent('myevent', {
      detail: { data: this.messageFromChild }
    });
    this.dispatchEvent(event, 'myevent', event.detail.data);
    console.log('child: ' + event.detail.data)
  }

}