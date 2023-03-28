import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
  .mapa-container{
    width :100%;
    height :100%
  }
  .row{
    background-color:white;
    border-radius:5px;
    bottom:50px;
    left:50px;
    padding :10px;
    z-index:999;
    position:fixed;
    width:400px
  }
  `
  ]
})
export class ZoomRangeComponent implements AfterViewInit,OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef
  mapa!:mapboxgl.Map
  zoomLevel :number =10
  center :[number,number] =[-74.872065,11.030183]

  ngOnDestroy(): void {
      this.mapa.off('zoom', ()=>{})
      this.mapa.off('zoomend', ()=>{})
      this.mapa.off('move', ()=>{})
  }

  ngAfterViewInit(): void {

    this.mapa= new mapboxgl.Map({
    container: this.divMapa.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center: this.center,
    zoom:this.zoomLevel// style URL
    });

    this.mapa.on('zoom',(ev)  =>{
      this.zoomLevel = this.mapa.getZoom()
    })

    this.mapa.on('zoomend',(ev)  =>{
      if(this.mapa.getZoom()>18){
        this.mapa.zoomTo(18)
      }
    })

    this.mapa.on('move',(event)  =>{
     const target = event.target
     const {lng,lat} = target.getCenter()

     this.center = [lng,lat]
    })

  }

  zoomIn(){
    this.mapa.zoomOut()
    this.zoomLevel = this.mapa.getZoom()
  }

  zoomOut(){
    this.mapa.zoomIn()
    this.zoomLevel = this.mapa.getZoom()
  }
  zoomCambio(valor :string){
    this.mapa.zoomTo(Number(valor))
  }

}
