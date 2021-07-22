import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(){
    return this.http.get('https://rickandmortyapi.com/api/location')
  }

  getLocation(idLocation: any){
    return this.http.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
  }
}
