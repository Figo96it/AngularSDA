import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student } from '../student';
import { HttpStudentService } from '../http-student.service';
import { delay } from 'rxjs';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  isTableVisible: boolean = true;
  isDataLoaded = false;
  isErrorOccured = false;
  students: Student[] = [
    // new Student(1, "Jan Kowalski", "kowalski@gmail.com"),
    // new Student(2, "Adam Nowak", "nowak@onet.pl"),
    // new Student(3, "Joanna Nowak", "joanna@o2.pl"),
    // new Student(27, "Karolina Kowalska", "kowalska@gmail.com"),
    // new Student(5, "Ola Olowska", "ola@gmail.com"),
    // new Student(61, "Piotr Testowy", "testowy@gmail.com")
  ];

  //prosty model subscribe obsługuje tylko pozytywną odpowiedź z serwera
  // constructor(private httpStudentService: HttpStudentService) {
  //   console.log("Przed wywołaniem httpService");
  //   this.httpStudentService.getStudents().pipe(delay(2000)).subscribe(data => {
  //     console.log("Wewnątrz httpService");
  //     this.students = data;
  //     this.isDataLoaded = true;
  //   });
  //   console.log("Po wywołaniu httpService");
  // }

  constructor(private httpStudentService: HttpStudentService) {
    console.log("Przed wywołaniem httpService");
    this.httpStudentService.getStudents().pipe(delay(2000)).subscribe({
      next: data => {
        console.log("Wewnątrz httpService");
        this.students = data;
        this.isDataLoaded = true;
      }, error: _ => {
        this.isErrorOccured = true;
        this.isDataLoaded = true;
      }
    });
    console.log("Po wywołaniu httpService");
  }

  toogleDisplay() {
    this.isTableVisible = !this.isTableVisible;
  }
}
