import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { Login } from 'src/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const login: Login = {
      username: this.username,
      password: this.password
    };
    this.auth.login(login).subscribe(response => {
      this.error = '';
      // tslint:disable-next-line:no-string-literal
      localStorage.setItem('token', response['token']);
      this.router.navigate(['/home']);
    },
    error => this.error = 'Username or password are incorrect');
  }
}
