import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Member} from '../_model/member';
import {AuthToken} from '../_model/auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(member: Member) {
    return this.http.post<AuthToken>('http://localhost:8080/api/login', member);
  }

  register(member: Member) {
    return this.http.post('http://localhost:8080/api/register', member);
  }
}
