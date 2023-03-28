import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { json } from 'express';
import * as mapboxgl from 'mapbox-gl';


interface MarcadorColor{
  
  color:string
  marker?: mapboxgl.Marker
  centro?:[number,number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container{
    width :100%;
    height :100%
  }
    .list-group{
      position :fixed;
      top:20px;
      right:20px;
      z-index:99;
    }
    li{
      cursor:pointer
    }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit{

  @ViewChild('mapa') divMapa!: ElementRef
  mapa!:mapboxgl.Map
  zoomLevel :number =15
  center :[number,number] =[-74.872065,11.030183]
  marcadores: MarcadorColor[] =[]


  ngAfterViewInit(): void {

    this.mapa= new mapboxgl.Map({
    container: this.divMapa.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center: this.center,
    zoom:this.zoomLevel// style URL
    });

    this.leerLocalStorage()

    const marker = new mapboxgl.Marker()
    .setLngLat(this.center)
    .addTo(this.mapa)
  }

  irMarcador(marker :mapboxgl.Marker ){
    this.mapa.flyTo({
      center:marker.getLngLat()
    })
  }

  agregarMarcador(){

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    

    const nuevoMarcador = new mapboxgl.Marker( {draggable:true, color})
      .setLngLat(this.center)
      .addTo(this.mapa)

    this.marcadores.push({
      marker: nuevoMarcador,
      color
    })

    this.guardarMarcadores()

    nuevoMarcador.on('dragend', ( )=> {
      this.guardarMarcadores()
    })
  }

    guardarMarcadores(){

      const lngLatArr :MarcadorColor[]=[]

      this.marcadores.forEach(m =>{
        const color = m.color
        const {lng,lat} =m.marker!.getLngLat()

        lngLatArr.push({
          color,
          centro : [lng,lat]
        })
      })

      localStorage.setItem('marcadores', JSON.stringify(lngLatArr))
  }

    leerLocalStorage(){
      if(!localStorage.getItem('marcadores')){
        return
      }
      const lngLatArr : MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!)

      lngLatArr.forEach(m=>{
        const newMarker= new mapboxgl.Marker({
          color: m.color,
          draggable :true
        })
        .setLngLat(m.centro!)
        .addTo(this.mapa)

        this.marcadores.push({
          marker: newMarker,
          color : m.color
        })

        newMarker.on('dragend', ()=>{
          this.guardarMarcadores()
        })
      })
      }
      
      borrarMarcador(i:number){
        this.marcadores[i].marker?.remove()
        this.marcadores.splice(i,1)
        this.guardarMarcadores()
    }
}
