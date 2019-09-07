import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from 'src/models/Register';
import { Login } from 'src/models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:28924/api/auth';

  constructor(private httpClient: HttpClient) { }

  register(model: Register) {
    return this.httpClient.post(this.baseUrl + '/register', model);
  }

  login(model: Login) {
    return this.httpClient.post(this.baseUrl + '/login', model);
  }

  logout() {
    localStorage.removeItem('token');
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
