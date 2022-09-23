import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http : HttpClient) { }

  getPokemon(name: string){
    /*
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .subscribe({
      next: (data: any) =>{
        console.log(data)
      }
    })*/
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .pipe(
      map( (resp: any) =>{
        console.log(resp)
        return {
          name: resp.name,
          order: resp.order
        }
      })
    )
  }
}
