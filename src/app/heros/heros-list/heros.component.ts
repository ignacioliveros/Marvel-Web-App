import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
  
  constructor(
    private herosService: HerosService,
    private config: NgbPaginationConfig,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location ) {
    config.size = 'sm';
  }

  ngOnInit() {
    this.page = +this.route.snapshot.queryParams['page'] || 1;
    this.searchName = this.route.snapshot.queryParams['searchName'] || '';
    this.location.replaceState('/heros');    //Reset Url....
    this.getHeros();
  }

  goDetail(id) {
    if (this.searchName) {
      this.router.navigate(['/heros', id], { queryParams: { page: this.page, searchName: this.searchName } });
    }else
    this.router.navigate(['/heros', id], { queryParams: { page: this.page } });
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
