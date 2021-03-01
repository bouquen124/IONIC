import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estado } from './Estado';




@Injectable({
  providedIn: 'root'
})
export class EstadoService {


  constructor(private httpclient :HttpClient) { }
  url ='http://127.0.0.1:8000/api';

/* save( estado:Estado){


  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  return this.httpclient.get(this.url + '/estados' + estado +  { 'headers': headers })
 



}

 */


}
