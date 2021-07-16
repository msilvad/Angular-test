import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { FormsPersonajeComponent } from './forms-personaje/forms-personaje.component';

import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    FormsPersonajeComponent
  ],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
