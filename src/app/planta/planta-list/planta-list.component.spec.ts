/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PlantaListComponent } from './planta-list.component';

import {faker} from "@faker-js/faker";
import {generatePlantas} from "../planta-help";
import {HttpClientModule} from "@angular/common/http";
import {PlantaTiposPipe} from "./planta-tipos.pipe";
import { throwError } from 'rxjs';
import {PlantaService} from "../planta.service";

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;
  const fakePlantas = faker.datatype.number({min: 50, max: 100});
  const generatedPlantas = generatePlantas(fakePlantas);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantaListComponent, PlantaTiposPipe ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    component.plantas = generatedPlantas
    component.loading = true
    component.error = false
    fixture.detectChanges();

    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading status', () => {
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.loading-status .spinner-border'))).toHaveSize(1)
  })

  it('should show empty error message after loading is finished', () => {
    component.loading = false
    component.error = false
    component.plantas = []
    fixture.detectChanges();
    expect(debug.queryAll(By.css('table.plantas-table .error-loading'))).toHaveSize(1)
  });

  it('should create a list of plantas based on return quantity', () => {
    const quantity = component.plantas.length
    component.loading = false
    component.error = false
    fixture.detectChanges();
    expect(debug.queryAll(By.css('table.plantas-table .plantas-info'))).toHaveSize(quantity)
  });

  it('should show quantity of types, the content is checked in pipe test', async () => {
    component.loading = false
    let tipos:{[key:string]: boolean} = {}
    for (const planta of component.plantas){
      tipos[planta.tipo] = true
    }
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.summary-tipos .summary-tipo'))).toHaveSize(Object.values(tipos).length)
  });

  it('should create a list of plantas based on return quantity using online service', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const quantity = component.plantas.length
    expect(debug.queryAll(By.css('table.plantas-table .plantas-info'))).toHaveSize(quantity)

    for (const planta of component.plantas){
      expect(planta.id).toBeTruthy()
      expect(planta.nombre_comun).toBeTruthy()
      expect(planta.tipo).toBeTruthy()
      expect(planta.clima).toBeTruthy()
      expect(planta.imagen).toBeTruthy()

    }

  });

  it('should change status to show error on fail', async () => {
    spyOn(component.plantaService,'getPlantas').and.returnValue(throwError(() => new Error('On Response error')));
    component.ngOnInit()
    fixture.detectChanges();
    expect(component.error).toBeTrue()
  });



});
