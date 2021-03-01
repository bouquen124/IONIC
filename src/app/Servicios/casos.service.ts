import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Casos } from './casos'

@Injectable({
  providedIn: 'root'
})
export class CasosService {

  constructor(private httpclient :HttpClient) { }

  url ='http://127.0.0.1:8000/api/t_casos';

  getCasos() {
    const path = `${this.url}`;
    return this.httpclient.get <any>(path);
  }
  createCasos(casos: Casos) {
    const path = `${this.url}`;
    return this.httpclient.post<Casos>(path, casos); 
  
  }

  deleteCasos(id: number) {
    const path = `${this.url}/${id}`;
    return this.httpclient.delete(path);
  }



  updateCasos(casos: Casos) {
    const path = `${this.url}/${casos.id}`;
    return this.httpclient.put<Casos>(path, casos);
  }
  


}
