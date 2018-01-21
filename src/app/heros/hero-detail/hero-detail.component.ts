import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  page:number
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');  
    this.page = this.route.snapshot.queryParams['page'];    
  }

  onBack() { 
    this.router.navigate(['/heros'], { queryParams: { page: this.page } });
  }

}
