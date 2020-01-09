import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    console.log('testea');
    this.buildLoginForm();
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      setTimeout(() => {
        const username = this.loginForm.value.username.toString();
        const password = this.loginForm.value.password.toString();

        this.authenticationService.signIn(username, password);
      }, 500);
    }
  }

  private buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

}
