import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptingComponent } from './adopting/adopting.component';
import { BuyingComponent } from './buying/buying.component';
import { KeyDecisionPointsComponent } from './key-decision-points/key-decision-points.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { HouseBreakingComponent } from './house-breaking/house-breaking.component';
import { SeperationAnxietyComponent } from './seperation-anxiety/seperation-anxiety.component';
import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'adopting', component: AdoptingComponent },
	{ path: 'buying', component: BuyingComponent },
	{ path: 'key-decision-points', component: KeyDecisionPointsComponent },
	{ path: 'puppies', component: PuppiesComponent },
	{ path: 'house-breaking', component: HouseBreakingComponent },
	{ path: 'seperation-anxiety', component: SeperationAnxietyComponent },
	{ path: 'podcast', component: PodcastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
