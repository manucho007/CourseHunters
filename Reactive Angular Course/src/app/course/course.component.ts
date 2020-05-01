import { CoursesService } from './../services/courses.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll,
  shareReplay,
  catchError,
} from 'rxjs/operators';
import {
  merge,
  fromEvent,
  Observable,
  concat,
  throwError,
  combineLatest,
} from 'rxjs';
import { Lesson } from '../model/lesson';
interface CourseData {
  course: Course;
  lessons: Lesson[];
}
@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  // Not optimal in some cases to have multiple ngcontainer with multiple observables
  // We can group everythig we need into a single observable
  // course$: Observable<Course>;
  // lessons$: Observable<Lesson[]>;

  // Observable contains multiple other types to avoid multiple observables
  // In this case helps us display parts of our application as soon as it's available
  // without having to wait for all the data to be available and being rendered
  data$: Observable<CourseData>;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {
    // We get the courseID from the router
    const courseId = parseInt(this.route.snapshot.paramMap.get('courseId'));
    // Passing a first value of null with startWith
    const course$ = this.coursesService
      .loadCourseById(courseId)
      .pipe(startWith(null));
    const lessons$ = this.coursesService
      .loadAllCourseLessons(courseId)
      .pipe(startWith([]));
    // Don't need to wait until both emit values, it'll automatically update the obs as new values arrive
    // Will emit TS tuples
    // To fix the issue of it waiting for all the obs to emit a first value, we'll pass some default values
    this.data$ = combineLatest([course$, lessons$]).pipe(
      map(([course, lessons]) => {
        return {
          course,
          lessons,
        };
      }),
      tap(console.log)
    );
  }

  ngOnInit() {}
}
