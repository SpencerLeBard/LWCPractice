import { LightningElement } from 'lwc';

export default class Lwcprac extends LightningElement {
    greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}