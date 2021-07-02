import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CardPerson} from "./card-person/card-person.component";
import {DescriptionPersonComponent} from "./DescriptionPerson/description-person.component";
import {AppComponent} from "./app.component";
import {FormPersonComponent} from "./form-person/form-person.component";

const routes: Routes =
  [
    {path: 'card-person', component: CardPerson},
    {path: 'description-person', component: DescriptionPersonComponent},
    {path: 'form-person', component: FormPersonComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
