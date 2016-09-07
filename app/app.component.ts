import { Component } from "@angular/core";
import { TodoService } from './shared/todo.service';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Todo } from './shared/Todo.model';
@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoFormComponent, TodoListComponent],
    providers: [TodoService]
})

export class AppComponent {
    title: string;
    todos: Todo[];
    
    constructor(){
        this.title = "Angular 2DO";
    }
        
    test(){
        console.log("test");
    }
    
}