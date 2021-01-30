import {Component, OnInit} from '@angular/core';
import {User} from '../data/user';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User[] = [{id: 1, age: 2, email: 'wf@sm', username: 'faf', name: 'adsad'}];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.user);

  }

  id = new FormControl('', [Validators.required, Validators.maxLength(3), this.idValidator]);
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [Validators.required, Validators.max(99)]);

  myForm = new FormGroup({
    id: this.id,
    name: this.name,
    username: this.username,
    email: this.email,
    age: this.age,
  });

  submit(myForm: FormGroup): void {
    this.user.push(myForm.value);
  }

  idValidator(inputId: AbstractControl): any {
    console.log(this.user);

    const res = this?.user.some(value => value.id === inputId.value);
    console.log(res);

    if (this?.user.some(value => value.id === inputId.value)) {
      console.log(inputId);
      return {error: true, msg: 'This id already exist'};
    } else {
      return null;
    }
  }
}
