import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer, BeerService } from '../beer.service';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  beerList: Beer[] = [];
  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.beerList = this.route.snapshot.data['beers'];
    console.log('from router');
    this.beerService.getBeers().subscribe((value) => {
      console.log('updated');
      this.beerList = value.slice(2, 4);
    });
  }
}
