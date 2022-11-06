/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PlantaTiposPipe } from './planta-tipos.pipe';
import {generatePlantas} from "../planta-help";
import {faker} from "@faker-js/faker";

describe('PlantaTiposPipe', () => {
  it('create an instance', () => {
    const pipe = new PlantaTiposPipe();
    const plantas = generatePlantas(faker.datatype.number({min: 25,max: 100}))

    let tipos:{[key:string]: number} = {}
    for (const planta of plantas){
      if (!tipos[planta.tipo]) tipos[planta.tipo] = 0

      tipos[planta.tipo]++
    }


    expect(pipe).toBeTruthy();

    const result = pipe.transform(plantas)
    let previewQuantity = null
    for (const plantaTipo of result){
      if (!previewQuantity){
        previewQuantity = plantaTipo.quantity
      }

      expect(plantaTipo.quantity).toBeLessThanOrEqual(previewQuantity)
      expect(plantaTipo.quantity).toBe(tipos[plantaTipo.tipo])
      previewQuantity = plantaTipo.quantity
    }

    let limitedResult = pipe.transform(plantas,2)
    expect(limitedResult.length).toBeLessThanOrEqual(Object.values(tipos).length>2?2:Object.values(tipos).length)

    limitedResult = pipe.transform(plantas,Object.values(tipos).length+1)
    expect(limitedResult.length).toBeLessThanOrEqual(Object.values(tipos).length)
  });
});
