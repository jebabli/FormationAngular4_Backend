import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../service/heroes.service';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
   private _heroesServices : HeroesService;
   private listHeroes : Hero[];
   private filtredHeroes : Hero[];
   private _filter : string ;
 
   get filter() : string{
    return  this._filter;
   }
 
    set filter(value : string) {
    this._filter = value;
    this.filtredHeroes = this.filter ? this.filterList(this.filter) : this.listHeroes;
    }
 
   constructor (private service : HeroesService){   
       this._heroesServices = service;
       this.filter = '';
       this.filtredHeroes = this.listHeroes;       
   }
   
   ngOnInit() {  
       this._heroesServices.getHeroes().subscribe(data => {
           this.listHeroes = data;
       });       
     }
     
     filterList(  filtredBy: string): Hero[] {
      return this.listHeroes.filter((Hero : Hero  )=> Hero.nom.toLocaleLowerCase().indexOf(filtredBy) !== -1)
     }   
   }