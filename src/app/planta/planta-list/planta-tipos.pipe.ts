import { Pipe, PipeTransform } from '@angular/core';
import {Planta} from "../planta";
import {PlantaTipoStructure} from "../planta-help";

@Pipe({
  name: 'PlantaTipos'
})

export class PlantaTiposPipe implements PipeTransform {

  transform(plantas: Planta[],limit?:number):PlantaTipoStructure[]
  {
    const tipos:{[key:string]: PlantaTipoStructure} = {}
    for (const planta of plantas){
      if (!tipos[planta.tipo]) {
        tipos[planta.tipo] = {tipo: planta.tipo,quantity: 0}
      }
      tipos[planta.tipo].quantity++
    }

    let result = Object.values(tipos)
    result = result.sort((vb1,vb2) => (vb1.quantity < vb2.quantity) ? 1 : (vb1.quantity > vb2.quantity) ? -1 : 0)

    return limit ? result.slice(0,limit) : result
  }

}
