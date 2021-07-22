import { LocationService } from './../../shared/services/location.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {


  locations: any[] = [];
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((locationsData: any) => {
      this.locations = locationsData.results;
    });
  }

}
