import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  education: string[] = ['BAC', 'BAC+2', 'BAC+3/4', 'MASTER', 'DOCTORAT'];
  constructor(
    private _fb: FormBuilder,
    private _empService: AuthService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.empForm.patchValue(this.data);
  }
  onForSubmit() {
    
    if (this.empForm.valid) {
      if(this.data){
        this._empService.UpdateEmployee(this.data.id,this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee Updated !');
            this._dialogRef.close( true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      
    }
    else{
       this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee added succefully');
          this._dialogRef.close( true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
     
    }
  }
}
