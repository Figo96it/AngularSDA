import { Component } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.css'
})
export class SandboxComponent {
  title = 'student-manager-angular';
  name = 'My new test app';

  onClick() {
    this.name = "New name app";
  }
}
