import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.page.html',
  styleUrls: ['./clinicas.page.scss'],
})
export class ClinicasPage implements OnInit {

  constructor(public http : HttpClient) { }

  ngOnInit() {

    this.index();
  }




  clinicas: any=[];
  index(){
    this.http.get<any>('http://127.0.0.1:8000/api/c_clinicas').subscribe(r=>{
  
    console.log(r.data);
    this.clinicas= r.data;
  
    });
  
    
  }
}
