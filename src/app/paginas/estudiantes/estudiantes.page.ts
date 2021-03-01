import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  constructor(public http : HttpClient) { }

  ngOnInit() {
    this.index();
  }

  estudiantes: any=[];
  index(){
    this.http.get<any>('http://127.0.0.1:8000/api/c_estudiantes').subscribe(r=>{
  
    console.log(r.data);
    this.estudiantes= r.data;
  
    });
  
    
  }









}
