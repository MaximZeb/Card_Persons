import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-description-person',
  templateUrl: './description-person.component.html',
  styleUrls: ['./description-person.component.css']
})
export class DescriptionPersonComponent implements OnInit {
  constructor(private http: HttpClient) {
  }
  todos = [];
  ngOnInit() {
    this.http.get<[]>('https://jsonplaceholder.typicode.com/todos/2').subscribe(response => {
      this.todos = response;
    })
  }
}
