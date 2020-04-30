import { CoursesStore } from './../services/courses.store';
import { MessagesService } from './../messages/messages.service';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course, sortCoursesBySeqNo } from '../model/course';
import { interval, noop, Observable, of, throwError, timer } from 'rxjs';
import {
  catchError,
  delay,
  delayWhen,
  filter,
  finalize,
  map,
  retryWhen,
  shareReplay,
  tap,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;
  intermediateCourses$: Observable<Course[]>;
  constructor(
    private coursesService: CoursesService,
    private coursesStore: CoursesStore
  ) {}

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    // const courses$ = this.coursesService.loadAllCourses().pipe(
    //   map((courses) => courses.sort(sortCoursesBySeqNo)),
    //   // Will provide a new observable that will replace the failed observable
    //   catchError((err) => {
    //     const message = 'Could not load courses';
    //     this.messagesService.showErrors(message);
    //     console.log(message, err);
    //     // Creates new observable that immediatly emits the error and ends lifecycle
    //     return throwError(err);
    //   })
    // );

    // Call to the loading service to toggle the loading spinner
    // const loadCourses$ = this.loadingService.showLoaderUntilCompleted(courses$);
    this.beginnerCourses$ = this.coursesStore.filterByCategory('BEGINNER');
    this.intermediateCourses$ = this.coursesStore.filterByCategory(
      'INTERMEDIATE'
    );
    this.advancedCourses$ = this.coursesStore.filterByCategory('ADVANCED');
  }
}
