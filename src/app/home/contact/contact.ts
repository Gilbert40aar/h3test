import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Formdata:', this.myForm.value);
    } else {
      console.log('Formen er ugyldig');
      this.myForm.markAllAsTouched(); // viser fejl
    }
  }

}
