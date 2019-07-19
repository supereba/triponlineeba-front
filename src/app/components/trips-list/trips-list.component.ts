import { TripService } from './../../services/trip.service';
import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/domain/trip';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  data: Trip[];

  // tslint:disable-next-line: no-inferrable-types
  width: number = 140;
  // tslint:disable-next-line: no-inferrable-types
  height: number = 50;

  constructor(private service: TripService) {

  }

  ngOnInit() {
    this.service.getAllTrips().subscribe(
      resp => this.data = resp,
      error => console.log('Attention, il y a une erreur' + error)
    );
  }

}
