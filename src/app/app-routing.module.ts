import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { BeerResolverService } from './resolvers/beer.resolver.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: { beers: BeerResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
