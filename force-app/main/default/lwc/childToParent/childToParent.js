import { LightningElement, api } from 'lwc';
// import { fireEvent } from 'c/pubsub';

export default class ChildToParent extends LightningElement {

  //NOTE Child to parent communication is done via events

  @api getValueFromParent;


  handleClick() {
    const event = new CustomEvent('myevent', {
      detail: { data: 'Hello from child component' }
    });
    this.dispatchEvent(event, 'myevent', event.detail.data);
    console.log('child: ' + event.detail.data)
  }

}