import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {  Estado } from '../../Servicios/Estado';
import { EstadoService } from 'src/app/Servicios/estado.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.page.html',
  styleUrls: ['./estados.page.scss'],
})
export class EstadosPage implements OnInit {
  estado:Estado={
    nombre:null,
    descripcion:null
      };
  constructor(public http : HttpClient, private estadoservice: EstadoService) { 



  }

  ngOnInit() {


    this.index();
  }



  
estados: any=[];

index(){
  this.http.get<any>('http://127.0.0.1:8000/api/c_estados').subscribe(r=>{

  console.log(r.data);
  this.estados= r.data;

  });
  
}
SaveEstado(){
/*   this.estadoservice.save(this.estado).subscribe(data=>{
alert('pelicula guardada');
console.log(data);

  }); */
  console.log(this.estado);
}



  }
