import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boletines',
  templateUrl: './boletines.page.html',
  styleUrls: ['./boletines.page.scss'],
})
export class BoletinesPage implements OnInit {

  constructor(public http : HttpClient) { }

  ngOnInit() {
    this.index();
  }





  boletines: any=[];
  index(){
    this.http.get<any>('http://127.0.0.1:8000/api/c_boletins').subscribe(r=>{
  
    console.log(r.data);
    this.boletines= r.data;
  
    });
}




}
