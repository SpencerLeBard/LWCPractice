import { LightningElement,track,api } from 'lwc';
import chatGPTResponse from '@salesforce/apex/chatGPTController.chatGPTResponse';
export default class ChatGPT extends LightningElement {
    @track question;
    @track response;
    
        assignData(event){
            this.question = event.target.value;
            console.log(this.question)
        }
    
        chatGPTResponse(){
            fetchResponse({question: this.question}).then(result => {
                this.response = result; 
                console.log(this.response)           
            }).catch(error=>{            
                alert(JSON.stringify(error));
            });
        }

}