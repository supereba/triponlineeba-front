import { TripService } from './../../services/trip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  data: Trips[];

  constructor(private service: TripService) {

  }

  ngOnInit() {
    this.service.getAllTrips().subscribe(
      resp => this.data = resp,
      error => console.log('Attention, il y a une erreur' + error)
    );
  }

}
