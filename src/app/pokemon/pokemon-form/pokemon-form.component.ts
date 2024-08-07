import { Component ,OnInit,Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';
import {Router} from '@angular/router';
import {PokemonTypeColorPipe} from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
            selector: 'app-pokemon-form',
            standalone: true,
            imports: [
            FormsModule,
            PokemonTypeColorPipe,
            LoaderComponent,
    CommonModule
            ],
            templateUrl: './pokemon-form.component.html',
            styleUrls:['./pokemon-form.component.css'],
})
export class PokemonFormComponent implements OnInit {

            @Input() pokemon:Pokemon;
            types:string[];
            isAddForm:boolean;

            constructor(private pokemonService:PokemonService,
                        private router:Router){}

            ngOnInit(){
            this.types=this.pokemonService.getPokemonTypeList();
                 this.isAddForm=this.router.url.includes('add');
            }


            hasType(type:string) :boolean{
                return this.pokemon.types.includes(type);
                }

            selectType($event:Event,type:string){
                const isChecked:boolean=($event.target as HTMLInputElement).checked;
                if(isChecked){
                    this.pokemon.types.push(type);
                    }else{
                        const index=this.pokemon.types.indexOf(type);
                        this.pokemon.types.splice(index,1);
                        }
                }

            isTypesValid(type:string):boolean{

            if(this.pokemon.types.length===1 && this.hasType(type)){
            return false;
            }

            if(this.pokemon.types.length>2 && !this.hasType(type)){
            return false;
            }
            return true;
            }


            onSubmit(){
                if(this.isAddForm){
                    this.pokemonService.addPokemon(this.pokemon).subscribe((pokemon:Pokemon)=>{
                        this.router.navigate(['pokemon',pokemon.id]);
                    })
                }else{
            this.pokemonService.updatePokemon(this.pokemon).subscribe(()=>{

                this.router.navigate(['pokemon',this.pokemon.id]);


            });
                }

                }
}