import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrainingService } from '../trening.service';
import { Exercise } from '../excercise.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  excersices: Exercise [] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.excersices = this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    console.log(form.value);
    this.trainingService.startExercise(form.value.exercise);
  }
}
