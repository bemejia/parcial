/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantaService } from './planta.service';
import {HttpClientModule} from "@angular/common/http";
import {Planta} from "./planta";

describe('PlantaService', () => {
  let service: PlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule]
    });
    service = TestBed.inject(PlantaService);
  });

  it('should get the data successfully', (done: DoneFn) => {
    service.getPlantas().subscribe({
      next: (plantas) => {
        expect(Array.isArray(plantas)).toBeTrue();
        for (const planta of plantas){
          expect(planta.id).toBeTruthy()
          expect(planta.nombre_comun).toBeTruthy()
          expect(planta.tipo).toBeTruthy()
          expect(planta.clima).toBeTruthy()
          expect(planta.imagen).toBeTruthy()

        }

        done();
      }
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
