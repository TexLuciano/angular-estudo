import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss'],
})
export class PokelistComponent {
  constructor(private ApiService: ApiService) {}

  public getAllPokemon: any;

  ngOnInit(): void {
    this.ApiService.apiListPokemon.subscribe((res) => {
      this.getAllPokemon = res.results;
      console.log(this.getAllPokemon);
    });
  }
}
