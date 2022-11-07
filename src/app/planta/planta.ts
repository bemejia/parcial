export class Planta {

  _id: number;
  _nombre_comun: string;
  _tipo: string;
  _clima: string;
  _imagen: string;

  constructor(planta:{
    id: number,
    nombre_comun: string,
    tipo: string,
    clima: string,
    imagen: string,
  }){
    this._id=planta.id;
    this._nombre_comun=planta.nombre_comun;
    this._tipo=planta.tipo;
    this._clima=planta.clima;
    this._imagen=planta.imagen;
  }

  get id(): number {
    return this._id;
  }

  get nombre_comun(): string {
    return this._nombre_comun;
  }

  get tipo(): string {
    return this._tipo;
  }

  get clima(): string {
    return this._clima;
  }

  get imagen(): string {
    return this._imagen;
  }

}
