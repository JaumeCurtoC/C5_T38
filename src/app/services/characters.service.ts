import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../character.model';

const url = 'http://localhost:3000/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

constructor(private http:HttpClient) { }

getCharacters(): Observable<Character[]>{
  return this.http.get<Character[]>(url);
}

getCharacterbyId(id: any): Observable<Character>{
  return this.http.get(`${url}/${id}`);
}

}
