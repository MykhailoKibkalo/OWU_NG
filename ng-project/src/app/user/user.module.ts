import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserService} from './services/user.service';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [UserService]
})
export class UserModule {
}
