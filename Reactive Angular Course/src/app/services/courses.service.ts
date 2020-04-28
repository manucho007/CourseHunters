import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
// Service layer will only return observables
// Doesn't return mutable data or promises
export class CoursesService {
  constructor(private httpd: HttpClient) {}

  loadAllCourses(): Observable<Course[]> {
    return this.httpd.get<Course[]>('api/courses').pipe(
      map((res) => res['payload']),
      shareReplay()
    ); // shareReplay limits the amount of callbacks when subscribing to the observables
  }
}
