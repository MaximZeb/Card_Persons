import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {PERSONS} from "../person";
import {Per} from "../interface";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})


export class FormPersonComponent implements OnInit {

  NewMen = PERSONS;

  cardPerson!: FormGroup;


  ngOnInit():void {
    this.cardPerson = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      profession: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }



  send() {
    if(this.cardPerson.valid) {
      this.NewMen.push({name:this.cardPerson.value.name, profession:this.cardPerson.value.profession})
      this.cardPerson.reset(); // сброс формы
    }

  }
}
