import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'segunda-clase-a';
  name : string=''
  order : string = ''

  constructor(public requestService: RequestService){}

  ngOnInit() {
    this.buttonClick()
  }

  buttonClick(){
    let button = document.getElementById("btn-1");
    const SEARCH_INPUT : HTMLInputElement = <HTMLInputElement>document.getElementById("search");
    
    console.log('value',SEARCH_INPUT.value)

    button?.addEventListener("click",()=>{
      this.requestService.getPokemon(SEARCH_INPUT.value).subscribe({
        next: (resp : any) => {
          console.log(resp);
          this.name = resp.name;
          this.order = resp.order;
        },
        error: (err : any) => {
          this.name = 'error';
          this.order = 'error'
        }
      });
    })    
    
  }
  
}

