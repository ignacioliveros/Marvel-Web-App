import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros-list/heros.component';
import {HeroDetailComponent } from './heros/hero-detail/hero-detail.component';

const routes: Routes = [ 
  { path: 'heros', component: HerosComponent },
  { path: 'heros/:id', component: HeroDetailComponent },
  { path: '', redirectTo: 'heros', pathMatch: 'full' },
  { path: '**', redirectTo: 'heros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
