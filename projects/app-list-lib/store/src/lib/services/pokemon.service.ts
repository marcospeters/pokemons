import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../models/pokemon.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=2000'
  }

  fetchPokemon(): Observable<PokemonList> {
    return this.http.get<PokemonList>(this.baseUrl);
  }
}
