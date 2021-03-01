import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profesionales } from './profesionales';


@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  constructor(private httpclient :HttpClient) { }


  url ='http://127.0.0.1:8000/api/c_profesionals';


  getProfesionales() {
    const path = `${this.url}`;
    return this.httpclient.get <any>(path);
  }
  createProfesioanles(profesioanl: Profesionales) {
    const path = `${this.url}`;
    return this.httpclient.post<Profesionales>(path, profesioanl); 
  
  }

  deleteProfesional(id: number) {
    const path = `${this.url}/${id}`;
    return this.httpclient.delete(path);
  }


  updateProfesionales(profesional: Profesionales) {
    const path = `${this.url}/${profesional.id}`;
    return this.httpclient.put<Profesionales>(path, profesional);
  }
  

}
