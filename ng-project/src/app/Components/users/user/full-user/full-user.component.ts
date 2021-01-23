import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../../Interface/user';
import {usersWithAddress} from '../../../../data/users';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  id: number;
  users: User[] = usersWithAddress;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.id = value.id;
      console.log(this.id);
      console.log(this.users[this.id - 1].name);
    });

  }

}
