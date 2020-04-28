import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.css'],
})
export class CourseCardListComponent implements OnInit {
  @Input() courses: Course[] = [];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}
