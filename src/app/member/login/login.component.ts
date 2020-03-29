import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../_service/auth.service';
import {Member} from '../../_model/member';
import {AuthToken} from '../../_model/auth-token';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AuthenticationAction, LoginMemberAction} from '../../_ngrx/action/authentication.action';
import {AppState} from '../../_ngrx/state/app.state.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  authToken$: Observable<AuthToken>;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private memberService: AuthService,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.authToken$ = this.store.select(store => store.authentication);
  }

  login() {
    const member = new Member(this.loginForm.value);
    this.memberService.login(member).subscribe((data: AuthToken) => {
      this.store.dispatch(new LoginMemberAction(data));
      this.router.navigateByUrl('/home').then();
    });
  }
}
