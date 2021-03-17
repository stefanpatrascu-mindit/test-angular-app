import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contactForm: FormGroup;

  constructor() {
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null, [Validators.required]),
    });
  }

  errorHandling = (control: string, error: string) => {
    return this.contactForm.controls[control].hasError(error);
  }

  get formControls(): any {
    return this.contactForm['controls'];
  }

  ngOnInit() {
    this.contactForm = this.createFormGroup();
  }

  onSubmit() {

  }

}
