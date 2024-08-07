import { Component,OnInit} from '@angular/core';
import {Pokemon} from '../pokemon';
import { CommonModule } from '@angular/common';
import {BorderCardDirective} from '../border-card.directive';
import {PokemonTypeColorPipe} from '../pokemon-type-color.pipe';
import {DetailPokemonComponent} from '../detail-pokemon/detail-pokemon.component';
import { RouterOutlet,Router,RouterModule  } from '@angular/router';
import {PokemonService} from '../pokemon.service';
import {FormsModule} from '@angular/forms';
import{ AddPokemonComponent } from '../add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';



@Component({
        selector: 'app-list-pokemon',
        standalone: true,
        imports: [
        CommonModule,
        BorderCardDirective,
        PokemonTypeColorPipe,
        DetailPokemonComponent,
        AddPokemonComponent,
        RouterModule ,
        SearchPokemonComponent,
        FormsModule],
        templateUrl: './list-pokemon.component.html',
        styles: ``
})
export class ListPokemonComponent implements OnInit{

            pokemonList:Pokemon[] ;


            constructor(private router:Router,
            private pokemonService:PokemonService){}

            ngOnInit(){

            this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);                }



            goToPokemon(pokemon:Pokemon){
            this.router.navigate(['pokemon',pokemon.id]);
            }

}
