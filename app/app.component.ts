import {Component} from "@angular/core";
import { TodoListComponent } from './todo/todo-list.component'

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent]
})

export class AppComponent {
    title: string;
    todos: string[];
    
    constructor(){
        this.title = "Angular 2DO";
        this.todos = [];
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