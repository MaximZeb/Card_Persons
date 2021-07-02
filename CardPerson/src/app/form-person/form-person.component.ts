import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PERSONS} from "../person";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})

export class FormPersonComponent {
  cardPerson = new FormGroup({
    name: new FormControl(''),
    profession: new FormControl('')
  })

  send() {
    console.log(this.cardPerson.value);
    this.cardPerson.value.name = '';
    this.cardPerson.value.profession = '';
  }
}
