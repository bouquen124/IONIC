import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Estudiantes  } from './estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private httpclient :HttpClient) { }


  url ='http://127.0.0.1:8000/api/c_estudiantes';


  getEstudiantes() {
    const path = `${this.url}`;
    return this.httpclient.get <any>(path);
  }


  createEstudiante(estudiante: Estudiantes) {
    const path = `${this.url}`;
    return this.httpclient.post<Estudiantes>(path, estudiante); 
  
  }

  deleteEstudiante(id: number) {
    const path = `${this.url}/${id}`;
    return this.httpclient.delete(path);
  }


  updateEstudiantes(estudiante: Estudiantes) {
    const path = `${this.url}/${estudiante.id}`;
    return this.httpclient.put<Estudiantes>(path, estudiante);
  }


}
