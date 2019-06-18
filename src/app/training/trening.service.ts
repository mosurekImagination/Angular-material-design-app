import { Injectable } from '@angular/core';
import { Exercise } from './excercise.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TrainingService {
    private availableExcercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];
    private runningExercise: Exercise;
    public exerciseChanged = new Subject<Exercise>();
    private exercises: Exercise[] = [];

    getAvailableExercises() {
        return this.availableExcercises.slice();
    }

    startExercise(selectedId: string) {
        this.runningExercise = this.availableExcercises.find(ex => ex.id === selectedId);
        this.exerciseChanged.next({ ...this.runningExercise });
    }

    getRunningExercise() {
        return { ...this.runningExercise };
    }

    completeExercise() {
        this.exercises.push({...this.runningExercise, date: new Date(), state: 'completed'});
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        this.exercises.push({...this.runningExercise, date: new Date(), state: 'cancelled', 
        duration: this.runningExercise.duration * (progress / 100),
        calories: this.runningExercise.calories * (progress / 100) });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    getAllExercises() {
        return this.exercises.slice();
    }
}
