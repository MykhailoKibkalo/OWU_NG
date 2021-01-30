import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/resolve/user-resolve.service';
import {UserComponent} from './components/user/user.component';
import {HeaderComponent} from './components/header/header/header.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostResolveService} from './services/resolve/post-resolve.service';
import {FulluserComponent} from './components/fulluser/fulluser.component';
import {FullUserResolveService} from './services/resolve/full-user-resolve.service';
import { FullpostComponent } from './components/fullpost/fullpost.component';
import {FullPostResolverService} from './services/resolve/full-post-resolver.service';

const routes: Routes = [
  // {path: '', component: UsersComponent, resolve: {usersData: UserResolveService}}
  {
    path: '', component: HeaderComponent, children: [{
      path: 'user', component: UsersComponent, resolve: {usersData: UserResolveService}, children: [{
        path: ':id', component: FulluserComponent, resolve: {chosenUser: FullUserResolveService}
      }]
    },
      {
        path: 'post', component: PostsComponent, resolve: {postsData: PostResolveService}, children: [{
          path: ':id', component: FullpostComponent, resolve: {chosenPost: FullPostResolverService}
        }]
      }]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    FulluserComponent,
    FullpostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
