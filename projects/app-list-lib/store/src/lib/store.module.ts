import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PokemonState } from './state/pokemon/pokemon.state';


@NgModule({
  imports: [
    NgxsModule.forRoot([
      PokemonState
    ]),
  ],
  providers: [],
})
export class StoreModule {}
