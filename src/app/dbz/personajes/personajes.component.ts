import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.intefaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //cambia el valor de atributo input('nuevo nombre')
  //@Input() personajes: Personaje[] = []

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService) { }

}
