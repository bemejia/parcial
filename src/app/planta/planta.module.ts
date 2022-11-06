import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListComponent } from './planta-list/planta-list.component';
import { PlantaTipoPipe } from './planta-list/planta-tipo.pipe';


@NgModule({
  declarations: [
    PlantaListComponent,
    PlantaTipoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PlantaModule { }
