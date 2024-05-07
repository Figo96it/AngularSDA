import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "sandbox", component: SandboxComponent },
    { path: "students", component: StudentListComponent },
    { path: "add-student", component: AddStudentComponent },
    //localhost4200/edit-student/2
    //localhost4200/edit-student/5
    //localhost4200/edit-student/10
    { path: "edit-student/:id", component: EditStudentComponent }
];
