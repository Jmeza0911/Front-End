import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'



@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
  `
  #mapa{
    width :100%;
    height :100%
  }
  `
  ]
})
export class FullScreenComponent implements OnInit{
  
  ngOnInit(): void {
    
    const map = new mapboxgl.Map({
    container: 'mapa', // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center:[-74.872065,11.030183],
    zoom: 18 // style URL
    });

  }

}
