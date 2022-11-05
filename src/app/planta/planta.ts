export class Planta {

  id: number;
  nombreComun: string;
  tipo: string;
  clima: string;
  imagen: string;

  constructor(
    id: number,
    nombreComun: string,
    tipo: string,
    clima: string,
    imagen: string,
  ){
    this.id=id;
    this.nombreComun=nombreComun;
    this.tipo=tipo;
    this.clima=clima;
    this.imagen=imagen;
  }

}
