import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.page.html',
  styleUrls: ['./profesionales.page.scss'],
})
export class ProfesionalesPage implements OnInit {

  constructor(public http : HttpClient) { }

  ngOnInit() {

    this.index();
  }



 profesionales: any=[];
  index(){
    this.http.get<any>('http://127.0.0.1:8000/api/c_profesionals').subscribe(r=>{
  
    console.log(r.data);
    this.profesionales= r.data;
  
    });
  
    
  }



}
