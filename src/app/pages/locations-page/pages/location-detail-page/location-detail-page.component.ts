import { LocationService } from './../../../../shared/services/location.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-detail-page',
  templateUrl: './location-detail-page.component.html',
  styleUrls: ['./location-detail-page.component.scss']
})
export class LocationDetailPageComponent implements OnInit {


  location: any
  constructor(private route: ActivatedRoute, private locationService: LocationService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      const idLocation = params.get('idLocation');
      console.log(idLocation);


      this.locationService.getLocation(idLocation).subscribe((location) =>{
        console.log(location)
        this.location = location

    })
  })
  }
}
