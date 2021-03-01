import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boletines } from './boletines'

@Injectable({
  providedIn: 'root'
})
export class BoletinesService {

  constructor(private httpclient :HttpClient) { }


  url ='http://127.0.0.1:8000/api/c_boletins';

  getBoletines() {
    const path = `${this.url}`;
    return this.httpclient.get <any>(path);
  }


  createBoletin(boletin: Boletines) {
    const path = `${this.url}`;
    return this.httpclient.post<Boletines>(path, boletin); 
  
  }

  deleteBoletin(id: number) {
    const path = `${this.url}/${id}`;
    return this.httpclient.delete(path);
  }

  updateBoletines(boletin: Boletines) {
    const path = `${this.url}/${boletin.id}`;
    return this.httpclient.put<Boletines>(path, boletin);
  }
  
}
