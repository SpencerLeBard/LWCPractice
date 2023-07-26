import { LightningElement , wire , track } from 'lwc';
import GoogleCallout from '@salesforce/apex/GoogleCallout.googleCallout';

export default class CalloutPractice extends LightningElement {
    @track response;
    @track gogleInfo

    handleClick(event){
        console.log(event)
    }

    @wire(GoogleCallout)
        makeCallout({data , error}){
            if(data){
                console.log(data);
                this.googleInfo = data
            } else if (error){
                this.error = error
                console.log(error)
            }
        }
    }
