import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {passwordDoesNotMatchValidator} from '../../_directive/password-does-not-match.directive';
import {Member} from '../../_model/member';
import {AuthService} from '../../_service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    emailAddress: [null, [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
    username: [null, [Validators.required, Validators.pattern('^[a-z]([a-z0-9]){3,}$')]],
    password: [null, [Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()\\s])[A-Za-z\\d!@#$%^&*()\\s]{4,}$')]],
    passwordConfirm: [null, Validators.required]
  }, {validators: passwordDoesNotMatchValidator});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private memberService: AuthService) {
  }

  onSubmit() {
    const member = new Member(this.registerForm.value);
    this.memberService.register(member).subscribe((data: JSON) => {
      console.log(data);
      this.router.navigateByUrl('/login').then();
    });
  }
}
