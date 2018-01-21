import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero } from '../hero';
import { HerosService } from '../hero-services/heros.service'


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  page: number
  hero: Hero;

  constructor(private route: ActivatedRoute, private router: Router, private herosService: HerosService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.page = this.route.snapshot.queryParams['page'];
    this.getHero(id);
  }

  getHero(id: number) {
    this.herosService.getHero(id)
    .subscribe(data=>this.hero=data.hero)  ;
  }

  onBack() {
    this.router.navigate(['/heros'], { queryParams: { page: this.page } });
  }

}
