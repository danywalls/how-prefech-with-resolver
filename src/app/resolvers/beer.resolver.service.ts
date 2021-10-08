import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Beer, BeerService } from '../beer.service';

@Injectable()
export class BeerResolverService implements Resolve<Observable<Beer[]>> {
  constructor(private beerService: BeerService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.beerService.getBeers();
  }
}
