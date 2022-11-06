export class Planta {

  _id: number;
  _nombreComun: string;
  _tipo: string;
  _clima: string;
  _imagen: string;

  constructor(planta:{
    id: number,
    nombreComun: string,
    tipo: string,
    clima: string,
    imagen: string,
  }){
    this._id=planta.id;
    this._nombreComun=planta.nombreComun;
    this._tipo=planta.tipo;
    this._clima=planta.clima;
    this._imagen=planta.imagen;
  }

  get id(): number {
    return this._id;
  }

  get nombreComun(): string {
    return this._nombreComun;
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
