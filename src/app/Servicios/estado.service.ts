import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estado } from './Estado';



@Injectable({
  providedIn: 'root'
})
export class EstadoService {


  constructor(private httpclient :HttpClient) { }
  url ='http://127.0.0.1:8000/api/c_estados';


  getEstados() {
    const path = `${this.url}`;
    return this.httpclient.get <any>(path);
  }

  createEstado(estado: Estado) {
    const path = `${this.url}`;
    return this.httpclient.post<Estado>(path, estado); 
  
  }


  deleteEstado(id: number) {
    const path = `${this.url}/${id}`;
    return this.httpclient.delete(path);
  }


 
  updateEstado(estado: Estado) {
    const path = `${this.url}/${estado.id}`;
    return this.httpclient.put<Estado>(path, estado);
  }
}
