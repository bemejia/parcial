import {faker} from "@faker-js/faker";
import {Planta} from "./planta";

export interface PlantaTipoStructure {tipo:string,quantity:number}

export function generatePlantas(quantity:number):Planta[]
{
  const plantas:Planta[] = []

  for (let i = 1; i <= quantity; i++) {
    plantas.push(new Planta({
      id: i,
      nombre_comun: faker.lorem.word(),
      tipo: faker.lorem.word(),
      clima: faker.lorem.word(),
      imagen: faker.image.imageUrl(),

    }))
  }

  return plantas
}
