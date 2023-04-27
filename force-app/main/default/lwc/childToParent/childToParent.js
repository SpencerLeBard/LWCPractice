import { LightningElement, api } from 'lwc';

export default class ChildToParent extends LightningElement {

  //NOTE Child to parent communication is done via events

  @api textFromParent;

  @api
  fireEvent() {
    const event = new CustomEvent('myevent', {
      detail: { data: 'Hello from child component' }
    });
    this.dispatchEvent(event);
  }

}