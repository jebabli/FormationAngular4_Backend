import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../service/heroes.service';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

   private _heroesServices : HeroesService; 
   constructor(private Myservice: HeroesService) {
   this._heroesServices = Myservice;   
  }

  ngOnInit() {
  }

  CreateHero(Nom: string,Age: string, Pouvoir: string,Citation: string,UrlImage: string): void {    
     var heroSend = new Hero();
     heroSend.nom = Nom;
     heroSend.age = +Age;
     heroSend.citation = Citation;
     heroSend.photo = UrlImage;
     heroSend.pouvoir = Pouvoir;
     this._heroesServices.addHero(heroSend).subscribe(heroSend => {
     alert("insert new hero ");
     }) 
  }
}
