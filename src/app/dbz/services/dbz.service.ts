import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.intefaces';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        },
    ]

    get personajes(): Personaje[] {
        //preads - separa los elementos que tiene el arreglo y sirve, para romper la referencia Js
        return [...this._personajes];
    }

    constructor() { }

    agregarPersonaje(personaje: Personaje): void {
        this._personajes.push(personaje)
    }
}