import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppState} from '../../_ngrx/state/app.state.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AuthToken} from '../../_model/auth-token';
import {LogoutMemberAction} from '../../_ngrx/action/authentication.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authentication$: Observable<AuthToken>;

  constructor(
    private router: Router,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.authentication$ = this.store.select(store => store.authentication);
    this.authentication$.subscribe(data => {
      console.log(data);
    });
  }

  logout() {
    this.store.dispatch(new LogoutMemberAction());
    this.authentication$.subscribe(data => {
      console.log(data);
    });
    this.router.navigateByUrl('login').then();
  }
}
