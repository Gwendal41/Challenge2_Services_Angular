import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktail } from 'src/models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) {
    
   }

   getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");

  }
}
