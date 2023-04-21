import { LightningElement,track,api } from 'lwc';
import fetchCompletion from '@salesforce/apex/chatGPTController.chatGPTResponse';
export default class ChatGPT extends LightningElement {
    @track question;
    @track response;
    
        assignData(event){
            this.question = event.target.value;
        }
    
        getChatGPTResponse(){
            fetchResponse({question:this.question}).then(result=>{
                this.response = result;            
            }).catch(error=>{            
                alert(JSON.stringify(error));
            });
        }

}