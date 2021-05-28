import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { GetPokemon } from './pokemon.action';
import { PokemonList } from '../../models/pokemon.interface';


@State<PokemonList>({
  name: 'pokemons',
  defaults: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
})
@Injectable()
export class PokemonState {
  constructor(private pokemonService: PokemonService) {}

  @Selector()
  static getPokemons(state) {
    return state;
  }

  @Action(GetPokemon)
  getDiagram(
    { getState, setState }: StateContext<PokemonList>,
  ) {
    return this.pokemonService.fetchPokemon().pipe(
      tap((result: PokemonList) => {
        const state = getState();
        setState({
          ...state,
          ...result,
        });
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
