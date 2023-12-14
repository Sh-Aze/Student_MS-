import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: '.app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form !: FormGroup;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        day:[''],
        month: [''],
        year: [''],
        city: [''],
        gender: [''],
        fName: [''],
        lName: [''],
        university: [''],
        email: [''],
        phone: [''],
        roll_no: [''],
        address: [''],
        age: [''],
        department: [''],
        cnic: [''],
        dayAddmission: [''],
        monthAddmission: [''],
        yearAddmission: [''],
      },
    );
  }

  onSubmit(): void {
    console.log(this.form.value)
  }
}
