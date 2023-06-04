import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [PokeHeaderComponent, PokeSearchComponent, PokelistComponent],
  exports: [PokeHeaderComponent, PokeSearchComponent, PokelistComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
})
export class SharedModule {}
