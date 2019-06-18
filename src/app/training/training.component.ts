import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from './trening.service';
import { Subscription } from 'rxjs';
import { Exercise } from './excercise.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {

  ongoingTraining = false;
  exerciseChanged: Subscription;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseChanged = this.trainingService.exerciseChanged.subscribe((exercise: Exercise) => {
      this.ongoingTraining = exercise ? true : false;
      console.log(this.ongoingTraining);
    });
  }

  ngOnDestroy(): void {
    this.exerciseChanged.unsubscribe();
  }
}
