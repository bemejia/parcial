import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantaModule } from './planta/planta.module';
import {PlantaListComponent} from "./planta/planta-list/planta-list.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlantaModule,
    RouterModule.forRoot([
      {path: '', component: PlantaListComponent},
    ]),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
