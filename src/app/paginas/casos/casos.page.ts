import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements OnInit {

  constructor(public http : HttpClient) { }

  ngOnInit() {

this.index();

  }
  casos: any=[];
  index(){
    this.http.get<any>('http://127.0.0.1:8000/api/t_casos').subscribe(r=>{
  
    console.log(r.data);
    this.casos= r.data;
  
    });
}
}