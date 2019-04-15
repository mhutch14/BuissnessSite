import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdoptingComponent } from './adopting/adopting.component';
import { BuyingComponent } from './buying/buying.component';
import { KeyDecisionPointsComponent } from './key-decision-points/key-decision-points.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { HouseBreakingComponent } from './house-breaking/house-breaking.component';
import { SeperationAnxietyComponent } from './seperation-anxiety/seperation-anxiety.component';
import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';

@NgModule({
  declarations: [
    AppComponent,
    AdoptingComponent,
    BuyingComponent,
    KeyDecisionPointsComponent,
    PuppiesComponent,
    HouseBreakingComponent,
    SeperationAnxietyComponent,
    HomeComponent,
    PodcastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
