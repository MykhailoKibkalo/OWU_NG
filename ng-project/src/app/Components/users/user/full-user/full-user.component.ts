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
  res: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.id = value.id;
      this.res = this.users.filter(x => x.id === +this.id);
      this.res = this.res[0];
    });

  }

}
