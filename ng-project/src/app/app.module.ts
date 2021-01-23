import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './Components/users/users.component';
import {UserComponent} from './Components/users/user/user.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import { FullUserComponent } from './Components/users/user/full-user/full-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    FullUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'link/users', component: UsersComponent, children: [
          {
            path: ':id', component: FullUserComponent
          }
        ]
      },
      {
        path: 'link/home', component: HomeComponent
      },
      {
        path: '**', redirectTo: '', pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
