import { LightningElement , api } from 'lwc';

export default class RecipesPrac extends LightningElement {
    timestamp = new Date();

    @api
refresh() {
        this.timestamp = new Date();
    }
}