import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Register } from 'src/models/Register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  register() {
    const register: Register = {
      username: this.username,
      password: this.password
    };

    this.auth.register(register).subscribe(
      response => {
        this.error = undefined;
        this.router.navigate(['/login']);
      },
      error => {
        this.error = '';
        if (error.error.hasOwnProperty('Username')) {
          this.error += error.error.Username + '<br>';
        }

        if (error.error.hasOwnProperty('Password')) {
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < error.error.Password.length; i++) {
            if (i !== error.error.Password.length - 1) {
              this.error += error.error.Password[i] + '<br>';
            } else {
              this.error += error.error.Password[i];
            }
          }
        }
       }
    );
  }
}
