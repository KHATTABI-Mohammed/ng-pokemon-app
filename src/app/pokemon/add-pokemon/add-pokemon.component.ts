import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [PokemonFormComponent],
  template: `
   <h2 class="center">Add a Pokemon</h2>
  <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class AddPokemonComponent {
  pokemon:Pokemon;
  ngOnInit(){
    this.pokemon= new Pokemon();
  }

}