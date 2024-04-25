import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { StudentListComponent } from './student-list/student-list.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "sandbox", component: SandboxComponent },
    { path: "students", component: StudentListComponent }
];
