import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";

import { CardPerson } from './card-person/card-person.component';
import { DescriptionPersonComponent } from "./DescriptionPerson/description-person.component";
import { FormPersonComponent } from "./form-person/form-person.component";

@NgModule({
  declarations: [
    AppComponent,
    CardPerson,
    DescriptionPersonComponent,
    FormPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
