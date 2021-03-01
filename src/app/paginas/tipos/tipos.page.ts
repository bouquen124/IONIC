import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.page.html',
  styleUrls: ['./tipos.page.scss'],
})
export class TiposPage implements OnInit {

  constructor(public http : HttpClient) { 


    
  }

  ngOnInit() {

    this.index();
  }




     tipos : any=[];

     index(){
  this.http.get<any>('http://127.0.0.1:8000/api/c_tipos').subscribe(r=>{

  console.log(r.data);

  this.tipos= r.data;
  });
}


}
