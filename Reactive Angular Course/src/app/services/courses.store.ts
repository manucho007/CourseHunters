import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, shareReplay } from 'rxjs/operators';
import { Course, sortCoursesBySeqNo } from './../model/course';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoadingService } from '../loading/loading.service';
import { MessagesService } from '../messages/messages.service';

@Injectable({
  providedIn: 'root',
})
// This service is stateful that's why it's called store and not service
// Reactive API observables are part of the public API
export class CoursesStore {
  //   Define a custom observable with BehaviorSubject
  private subject = new BehaviorSubject<Course[]>([]);
  // A new observable that emits the same values as the subject but the consumers of the service
  // Won't have access to the subject because it's private
  // Consumers can subscribe to the obs receive new values without emiting new values
  courses$: Observable<Course[]> = this.subject.asObservable();
  constructor(
    private httpd: HttpClient,
    private loadingService: LoadingService,
    private messagesService: MessagesService
  ) {
    this.loadAllCourses();
  }
  //   Method not accessible anywhere else in the app so content will only be loaded once at app startup time
  private loadAllCourses() {
    const loadCourses$ = this.httpd.get<Course[]>('api/courses').pipe(
      map((res) => res['payload']),
      catchError((err) => {
        const message = 'Could not load courses';
        console.log(message, err);
        this.messagesService.showErrors(message);
        return throwError(err);
      }),
      //   Call to subject and emit the data
      tap((courses) => this.subject.next(courses))
    );
    this.loadingService.showLoaderUntilCompleted(loadCourses$).subscribe();
  }
  //   Modify the value in memory and immediatly emit the new value throught the observable
  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    //   access the subject and get the last value emitted
    const courses = this.subject.getValue();
    // Find the course to modify
    const index = courses.findIndex((course) => course.id == courseId);
    // New object contains new version of the course
    const newCourse: Course = {
      ...courses[index],
      ...changes,
    };
    const newCourses: Course[] = courses.slice(0);
    newCourses[index] = newCourse;
    this.subject.next(newCourses);
    return this.httpd.put(`/api/courses/${courseId}`, changes).pipe(
      catchError((err) => {
        const message = 'Could not save course';
        console.log(message, err);
        this.messagesService.showErrors(message);
        return throwError(err);
      }),
      // Ensures that multiple subscruptions to the obs don't trigger multiple http calls
      shareReplay()
    );
  }

  //   Method to filter the categories of courses
  filterByCategory(category: string): Observable<Course[]> {
    return this.courses$.pipe(
      map((courses) =>
        courses
          .filter((course) => course.category == category)
          .sort(sortCoursesBySeqNo)
      )
    );
  }
}
