import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero-services/hero.service'


@Component({
  selector: 'app-hero-detail',
  moduleId: module.id,
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  page: number
  hero: Hero;
  searchName: string;

  constructor(private route: ActivatedRoute, private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.page = this.route.snapshot.queryParams['page'];
    this.searchName = this.route.snapshot.queryParams['searchName'];
    this.getHero(id);
  }

  getHero(id: number) {
    this.heroService.getHero(id)
      .subscribe(data => this.hero = data.hero);
  }

  onBack() {
    if (this.searchName) {
      this.router.navigate(['/heroes'], { queryParams: { page: this.page, searchName: this.searchName } });
    } else {
      this.router.navigate(['/heroes'], { queryParams: { page: this.page } });
    }

  }

}
