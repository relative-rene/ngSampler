import { Observable, of } from 'rxjs';

export class TaskService {
    private tasks = [{ id: 1, name: 'Create Database' }, { id: 2, name: 'Create Webservice' }, { id: 3, name: 'Create Frontend' }]

    public getTask(): Observable<{ id: number, name: string }> {
        const index = this.getRandomTaskIndex(0, 2);
        return of(this.tasks[index]);
        // return of(this.tasks[index]);
    }

    public getRandomTaskIndex(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}