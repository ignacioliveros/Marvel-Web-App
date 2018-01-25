import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { HerosService } from '../hero-services/heros.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero',
  moduleId: module.id,
  templateUrl: 'heros.component.html',
  styleUrls: ['heros.component.scss'],
  providers: [NgbPaginationConfig]
})
export class HerosComponent implements OnInit {

  heros: Hero[] = [];
  page: number;  
  collectionSize: number;
  searchName: string;
  
  constructor(private herosService: HerosService, config: NgbPaginationConfig, private route: ActivatedRoute) {
    config.size = 'sm';
  }

  ngOnInit() {
    this.page = +this.route.snapshot.queryParams['page'] || 1;
    this.getHeros();
  }

  getHeros() {    
      this.herosService.getHeros(this.page * 20 - 20, this.searchName)
        .subscribe(data => {
          console.log(data);
          this.heros = data.heros;
          this.collectionSize = data.collectionSize * 10;  //pagination bug      
        });      
  }
}
