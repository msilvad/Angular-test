import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.intefaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  cambiarNombre(event: any): void {
    console.log(event.targer.value)
  }

  constructor(private dbzService: DbzService) {
  }
}
