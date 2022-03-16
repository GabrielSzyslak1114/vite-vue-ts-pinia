import {defineStore} from 'pinia';
import {Task} from '../interface/todo.interface';

interface todoState{
    tasks: Task[];
    loading: Boolean;
}

export const useTodo = defineStore('todo', {

    state: (): todoState => ({
        tasks: [],
        loading: false
    }),
    actions:{
        async addTask(name:string): Promise<void>{
            this.loading = true;
            this.tasks.push(
                {
                id: new Date().getTime(),
                name, 
                date: new Date().toLocaleDateString(),
                done: false
                });
            this.loading = false;
        },
        async deleteTask(id: number): Promise<void>{
            this.tasks = this.tasks.filter(e => e.id != id);
        },
        async updateTask(id: number): Promise<void>{},
    },
})