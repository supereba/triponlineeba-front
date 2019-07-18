import { Trip } from './../domain/trip';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  URL: string = 'http://localhost:8080/trips';

  constructor(private client: HttpClient) {
    // DI
  }

  public getAllTrips(): Observable<Trip[]> {
    return this.client.get<Trip[]>(this.URL);
  }
}
