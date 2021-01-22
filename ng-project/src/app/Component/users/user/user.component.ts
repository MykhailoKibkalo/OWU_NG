import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../../Iterface/User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() chosenId = new EventEmitter();
  @Output() chosenUser = new EventEmitter();
  @Input() user: User;

  constructor() {
  }

  ngOnInit(): void {
  }

  userUp(user: User): void {
    this.chosenUser.emit(user);
  }

  idUp(id: number): void {
    this.chosenId.emit(id);
  }
}
