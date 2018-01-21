import { Component, OnInit  } from '@angular/core';
import { HerosService } from '../hero-services/heros.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit  {

  heros: Hero[] = [];  
  page: number = 1;
  offset: number;
  collectionSize: number;
  constructor(private herosService: HerosService) { }

  ngOnInit() {
    this.getHeros();
  } 
  pageChange() {
    console.log('hola');
  }
  
  getHeros() {     
    this.herosService.getHerosPagination(this.page * 20-20)
      .subscribe(data =>{
        this.heros = data.heros;
        this.collectionSize = data.collectionSize*10;  //pagination bug      
      });
  }

  

}
