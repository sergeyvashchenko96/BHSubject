import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      textInput: ['']
    });
  }

  submit(): void {
    const value = {...this.form.value};
    console.log(value);
    localStorage.setItem('config', JSON.stringify('value'));
  }
}

