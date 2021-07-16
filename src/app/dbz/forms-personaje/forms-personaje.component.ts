import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.intefaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-forms-personaje',
  templateUrl: './forms-personaje.component.html',
  styleUrls: ['./forms-personaje.component.css']
})
export class FormsPersonajeComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) { }

  //@Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);
    //this.onNewCharacter.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
