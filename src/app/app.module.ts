import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerService } from './beer.service';
import { HomeComponent } from './pages/home.component';
import { BeerResolverService } from './resolvers/beer.resolver.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [BeerService, BeerResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
