import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from './search_module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
birra !: string 
obsbirra !: Observable <Root>
ris !: Root

constructor(public http:HttpClient){

}


cerca(birra:HTMLInputElement){
this.birra = birra.value
this.obsbirra = this.http.get<Root>(`https://api.punkapi.com/v2/beers?beer_name=${birra}`)
this.obsbirra.subscribe((data:Root)=>{this.ris=data})

}


}
