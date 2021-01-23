import {Component, OnInit} from '@angular/core';
import {usersWithAddress} from '../../data/users';
import {User} from '../../Interface/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = usersWithAddress;

  constructor() {
  }

  ngOnInit(): void {
  }

}
