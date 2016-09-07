export class TodoSeedData{
    createDb(){
        let todos = [
            { id: 0, title: 'Изучить ES6', done: false },
            { id: 1, title: 'Изучить TypeScript', done: false },
            { id: 2, title: 'Изучить Angular 2', done: false }
        ];
        return { todos };
    }
}