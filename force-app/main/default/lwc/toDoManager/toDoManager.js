import { LightningElement , track, wire } from 'lwc';
// NOTE get something to work with @wire from apex method (create one that does SOQL query)
import accountQuery from '@salesforce/apex/QueryAccounts.accountQuery'

export default class ToDoManager extends LightningElement {

    //private properties not reactive, use @track to make private property reactive
    @track time = "8:15";
    @track greeting = "Hello World";

    @track todos = [];
    @track accountsList;


    @wire(accountQuery)
    getAccounts({ data, error }) {
        if (data) {
            this.results = data.map(account => {
                return { Id: account.id, Name: account.Name };
            });
           // this.results.forEach(x => accountsList.push(x))
        } else if (error) {
            this.searchOptions = undefined;
            this.error = error;
        }
    }

   //lifecycle methods are part of LWC famework and gets automaticlly invoked by the framework itself 
   connectedCallback(){
        this.getTime();

       /* eslint-disable */ setInterval( () => {
            this.getTime();
            console.log("Set Inteval called");
        }, 10000)
    }

    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();

        this.time = `${this.getHour(hour)}: ${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;
        this.setGreeting(hour);
    }

        //TODO get rid of this bs and see what happens

    getHour(hour){
        return hour === 0 ? 12 : hour > 12 ? (hour - 12) : hour;
    }

    getMidDay(hour){
        return hour >= 12 ? "PM" : "AM";
    }

    getDoubleDigit(digit){
        return digit < 10 ? "0" + digit : digit;
    }

    setGreeting(hour){
        if(hour < 12){
            this.greeting = "Good Morning";
        } else if(hour >= 12 && hour < 17){
            this.greeting = "Good Afternoon"
        } else {
            this.greeting = "Good Evening";
        }
    }

    //event handler for todo list
    addToDoHandler(){
        const inputBox = this.template.querySelector("lightning-input");
        console.log('current value: ' , inputBox.value);
        
        const todo = {
            toDoId: this.todos.length ,
            toDoName: inputBox.value ,
            done: false ,
            todoDate: new Date()
        }
        
        this.todos.push(todo);
        inputBox.value = "";
    }
}