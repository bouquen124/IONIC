import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clinicas } from './clinica';

@Injectable({
  providedIn: 'root'
})
export class ClinicasService {

  constructor(private httpclient :HttpClient) { }


  url ='http://127.0.0.1:8000/api/c_clinicas';


  getClinicas() {
    const path = `${this.url}`;
    return this.httpclient.get <any>(path);
  }


  createClinica(Clinica: Clinicas) {
    const path = `${this.url}`;
    return this.httpclient.post<Clinicas>(path, Clinica); 
  
  }
  deleteClinicas(id: number) {
    const path = `${this.url}/${id}`;
    return this.httpclient.delete(path);
  }


  updateClinicas(clinicas: Clinicas) {
    const path = `${this.url}/${clinicas.id}`;
    return this.httpclient.put<Clinicas>(path, clinicas);
  }
  
}
