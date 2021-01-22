import {Component, OnInit} from '@angular/core';
import {User} from '../../Iterface/User';
import {UserService} from '../../Service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userId: number;
  singleUser: User;
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  getChosenUser(user: User): void {
    this.singleUser = user;
  }

  getChosenId(id: number): void {
  this.userId = id;
  }

  delUser(): void {
    this.singleUser = null;
  }

  delPost(): void {
    this.userId = null;
  }

}
