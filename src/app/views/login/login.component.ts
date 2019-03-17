import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

interface User {
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginBody: User = {
    username: 'user',
    password: '12345678'
  };

  form: FormGroup;

  username = new FormControl('', Validators.required);
  password = new FormControl('', [Validators.required, Validators.min(8)]);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: this.username,
      password: this.password,
    })
  }

  ngOnInit() {
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    if (this.loginBody['password'] == this.form.value['password'] && this.loginBody['username'] == this.form.value['username']) {
      localStorage.setItem('user', JSON.stringify({ logged: true }));
      window.location.reload();
    }
  }
}
