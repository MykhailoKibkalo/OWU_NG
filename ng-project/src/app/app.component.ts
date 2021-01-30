import {Component} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My ng Project';

  // user = {name: 'Ivan', age: 21};

  // submit(form: NgForm): void {
  //   console.log(form);
  // }
 // -----------------------------------------
 //  name = new FormControl('32');
 //  age = new FormControl('23');
 //  myForm = new FormGroup({
 //    name: this.name,
 //    age: this.age
 //  });
 //
 //
 //  submit(myForm: FormGroup): void {
 //    console.log(myForm);
 //
 //  }
}

