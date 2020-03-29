import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from '../app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  exports: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    AppRoutingModule,
    MatDialogModule
  ]
})
export class MemberModule {
}
