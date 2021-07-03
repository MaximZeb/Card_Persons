import { PERSONS } from './../person';
import { Component } from '@angular/core';
import {Men, Per} from "../interface";

@Component({
    selector: 'app-card-person',
    templateUrl: './card-person.component.html',
    styleUrls: ['./card-person.component.css']
  })
  export class CardPerson  {
    Persons = PERSONS;



    delete(men: string): void {
        this.Persons = this.Persons.filter(n => n.name !== men )
    }
  }
