import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../shared/Todo.model';
import { TodoService } from '../../shared/todo.service';
@Component({
    selector: 'todo-form',
    templateUrl: './app/components/todo-form/todo-form.component.html',
    styleUrls: ['./app/components/todo-form/todo-form.component.css'],
    providers: [TodoService]
})

export class TodoFormComponent {
    @Output() added = new EventEmitter();
    
    constructor(private todoService: TodoService) {
    }
    add (title: string): void {
        if (title) {
            let todo = new Todo(title);
            this.todoService.addTodo(todo).then(todo => console.log(TodoFormComponent));
            
        }
    }
}