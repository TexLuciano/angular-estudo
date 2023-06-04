import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string =
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=60';

  constructor(private http: HttpClient) {}

  get apiListPokemon(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemon: any) => {
          this.apiGetPokemons(resPokemon.url).subscribe( res => resPokemon.status = res) ;
        });
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
   return this.http
      .get<any>(url)
      .pipe(
        map((res) => res)
        )
     
  }
}
