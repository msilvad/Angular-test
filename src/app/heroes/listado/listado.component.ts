import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Iroman', 'SpiderMan', 'Hulk', 'Thor'];
  heroeDelete: string[] = [];

  borrarHeroe() {
    const heroeBorrado = this.heroes.pop();
    let items: string = heroeBorrado != undefined ? heroeBorrado : '';
    this.heroeDelete.push(items);
  }
}
