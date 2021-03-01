import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(public http : HttpClient) { }

  ngOnInit() {

    this.index();
  }


  usuarios: any=[];
  index(){
    this.http.get<any>('http://127.0.0.1:8000/api/t_usuarios').subscribe(r=>{
  
    console.log(r.data);
    this.usuarios= r.data;
  
    });
  
    
  }



}
