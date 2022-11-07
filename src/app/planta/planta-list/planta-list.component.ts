import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Planta[] = [];
  loading:boolean = false;
  error:boolean = false

  constructor(public plantaService: PlantaService) { }

  ngOnInit(): void {
    this.plantaService.getPlantas().subscribe({
      next: (plantas) => {
        console.log(plantas)
        const plantasCollection:Planta[] = []
        for (const planta of plantas){
          plantasCollection.push(new Planta(planta))
        }
        this.plantas = plantasCollection;
      },
      error: () => {
        this.error = true
      }
    }).add(() => {
      this.loading = false
    })
  }

}
