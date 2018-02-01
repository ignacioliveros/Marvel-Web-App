import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { HeroService } from '../hero-services/hero.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero',
  moduleId: module.id,
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.scss'],
  providers: [NgbPaginationConfig]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  page: number;
  collectionSize: number;
  searchName: string;

  constructor(
    private heroService: HeroService,
    private config: NgbPaginationConfig,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    config.size = 'sm';
  }

  ngOnInit() {
    this.page = +this.route.snapshot.queryParams['page'] || 1;
    this.searchName = this.route.snapshot.queryParams['searchName'] || '';
    this.location.replaceState('/heroes');    //Reset Url....
    this.getHeros();
  }

  goDetail(id) {
    if (this.searchName) {
      this.router.navigate(['/heroes', id], { queryParams: { page: this.page, searchName: this.searchName } });
    } else
      this.router.navigate(['/heroes', id], { queryParams: { page: this.page } });
  }

  getHeros() {
    this.heroService.getHeros(this.page * 20 - 20, this.searchName)
      .subscribe(data => {
        console.log(data);
        this.heroes = data.heros;
        this.collectionSize = data.collectionSize * 10;  //pagination bug      
      });
  }
}
