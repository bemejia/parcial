import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListComponent } from './planta-list/planta-list.component';
import { PlantaTiposPipe } from './planta-list/planta-tipos.pipe';


@NgModule({
  declarations: [
    PlantaListComponent,
    PlantaTiposPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PlantaModule { }
