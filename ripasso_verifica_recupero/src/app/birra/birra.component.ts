import { Component } from '@angular/core';
import { Root } from '../search/search_module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-birra',
  templateUrl: './birra.component.html',
  styleUrls: ['./birra.component.css']
})
export class BirraComponent {
  birra !: string | null
  obsbirra !: Observable <Root>
  ris !: Root



  constructor(public http:HttpClient, private route:ActivatedRoute){
    this.route.paramMap.subscribe()

  }
  funzione = (params:ParamMap)=>{
    this.birra = params.get('id')
    this.obsbirra = this.http.get<Root>(`https://api.punkapi.com/v2/beers/${this.birra}`)
    this.obsbirra.subscribe((data:Root)=>{this.ris=data})


  }
}
