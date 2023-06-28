import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto: new FormControl(false, Validators.requiredTrue)
  })

  onSubmit(){
    console.log(this.form.value);
  }

  checkPassword(): boolean {
    let password = this.form.controls.password.value;
    let ripetiPassword = this.form.controls.ripetiPassword.value;
    if(password === ripetiPassword) {
      return true;
    } else {
      return false;
    }
  }
}
