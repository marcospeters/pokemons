import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetPokemon, PokemonState } from '@pokemon-lib/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Select(PokemonState.getPokemons)
  pokemons$: Observable<any>;

  pokemonsList: any[] = [];
  pokemonsListFilter: any[] = [];

  pokemonFavorite = [];

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.dispatchStore();

    this.pokemonFavorite = JSON.parse(localStorage.getItem('pokemonFavorite')) || [];
  }

  dispatchStore() {
    this.store.dispatch(new GetPokemon()).subscribe(() => {
      this.getPokemons();
    })
  }

  getPokemons(): void {
    this.pokemons$.subscribe((pokemons) => {
      this.pokemonsListFilter = this.pokemonsList = pokemons?.results;
    });
  }

  onSearch(value: string): void {
    this.pokemonsListFilter = this.pokemonsList.filter((item: any) => {
      return (item.name.indexOf(value) !== -1);
    })
  }

  favorite(pokemon: string): void {

    let indexOfPokemon = this.pokemonFavorite.indexOf(pokemon);

    if (indexOfPokemon > -1) {
      this.pokemonFavorite.splice(indexOfPokemon, 1);
    } else {
      this.pokemonFavorite.push(pokemon);
    }

    localStorage.setItem('pokemonFavorite', JSON.stringify(this.pokemonFavorite));
  }

  isfavorite(pokemon: string): boolean {

    if (this.pokemonFavorite.indexOf(pokemon) > -1) {
      return true;
    } else {
      return false;
    }
  }

}
