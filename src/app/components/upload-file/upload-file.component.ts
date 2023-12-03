import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  constructor(private router: Router) {}
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
