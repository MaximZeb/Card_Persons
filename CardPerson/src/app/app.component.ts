import { Component } from '@angular/core';
import {  trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

  ]
})
export class AppComponent {
  header: string = 'best developers on the planet';
}
