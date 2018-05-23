
import { Hero } from '../hero/hero'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {  

constructor(private http: Http) { } 

  getHeroes() : Observable <Hero[]> {
  return this.http.get("api/Hero")
    .map((res : Response) => res.json())
    .catch((error : any) => Observable.throw('Server error'));
  } 

  getHeroById(id :number) : Observable <Hero[]> {
  return this.http.get("api/Hero/"+id)
  .map((res : Response) => res.json())
    .catch((error : any) => Observable.throw('Server error'));
  } 

  addHero(hero:Hero): Observable<Hero> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("api/Hero/", hero, options)
               .map(this.extractData)
               .catch(this.handleErrorObservable);
}   
  
  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  
  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
} 
}