import {Component, OnInit} from '@angular/core';
import {usersWithAddress} from '../../data/users';
import {User} from '../../Interface/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hUsers: User[] = usersWithAddress;

  constructor() {
  }

  ngOnInit(): void {
  }

}
