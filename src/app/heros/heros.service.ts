import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero, HerosViewModel } from './hero';



const url = 'https://gateway.marvel.com:443/v1/public/characters';
const security = '?ts=1516309712&apikey=8ba269f53b575b7f50733326f96d8fa1&hash=ae89380f342530b61c2ad4a8074a86eb'; // NO GOOD.....
@Injectable()
export class HerosService {
  constructor(private http: HttpClient) { }

  getHeros(): Observable<HerosViewModel>{
    return this.http.get(`${url}${security}`)
      .pipe(
      map(data=>data=this.mappingToHero(data))
    );
  }  
  getHerosPagination(offset: number): Observable<HerosViewModel> {
    return this.http.get(`${url}?limit=20&offset=${offset}${security}`)
      .pipe(
      map(data => data = this.mappingToHero(data))
      );
  }  

  mappingToHero(data): HerosViewModel {
    let results = data['data'].results; 
    let herosViewModel: HerosViewModel;
    let hero: Hero;
    let heros: Hero[] = [];
    for (let item of results) {      
      heros.push(hero = {
        id: item.id,
        name: item.name,
        description: item.description,
        image: { path: item.thumbnail.path, extension: item.thumbnail.extension, size: '/portrait_xlarge.' }
      })
    }    
    herosViewModel = {
      heros: heros,
      collectionSize: Math.round(data['data'].total/20)    
    }
    return herosViewModel;
  }

}
