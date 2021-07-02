import { PERSONS } from './../person';
import { Component } from '@angular/core';

@Component({
    selector: 'app-card-person',
    templateUrl: './card-person.component.html',
    styleUrls: ['./card-person.component.css']
  })
  export class CardPerson  {
    Persons = PERSONS;
  }
