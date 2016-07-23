import {Component} from "@angular/core";

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    title: string;
    todos: string[];
    constructor(){
        this.title = "Angular 2DO!!!";
        this.todos = ["Заработать на матане на фрилансе", "Поняшить Еву"];
    }
    
    addTodo(title: string){
        if (title){
            this.todos.push(title);
        }
    }
    
    test(){
        console.log("test");
    }
}