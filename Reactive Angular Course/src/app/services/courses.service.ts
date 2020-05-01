import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { Lesson } from '../model/lesson';

@Injectable({
  providedIn: 'root',
})
// Service layer will only return observables
// Doesn't return mutable data or promises
export class CoursesService {
  constructor(private http: HttpClient) {}

  loadCourseById(courseId: number) {
    return this.http
      .get<Course>(`/api/courses/${courseId}`)
      .pipe(shareReplay());
  }

  loadAllCourseLessons(courseId: number): Observable<Lesson[]> {
    return this.http
      .get<Lesson>('/api/lessons', {
        params: {
          pageSize: '10000',
          courseId: courseId.toString(),
        },
      })
      .pipe(
        map((res) => res['payload']),
        shareReplay()
      );
  }
  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('api/courses').pipe(
      map((res) => res['payload']),
      shareReplay()
    ); // shareReplay limits the amount of callbacks when subscribing to the observables
  }

  saveCourses(courseId: string, changes: Partial<Course>): Observable<any> {
    return this.http
      .put(`/api/courses/${courseId}`, changes)
      .pipe(shareReplay());
  }

  searchLessons(search: string): Observable<Lesson[]> {
    return this.http
      .get<Lesson>('/api/lessons', {
        params: {
          filter: search,
          pafeSize: '100',
        },
      })
      .pipe(
        map((res) => res['payload']),
        shareReplay()
      );
  }
}
