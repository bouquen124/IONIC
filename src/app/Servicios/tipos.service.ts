import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tipos } from './tipos';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  constructor(private httpclient :HttpClient) { }


url='http://127.0.0.1:8000/api/c_tipos';




getTipos() {
  const path = `${this.url}`;
  return this.httpclient.get <any>(path);
}

createTipos(tipos: Tipos) {
  const path = `${this.url}`;
  return this.httpclient.post<Tipos>(path, tipos); 

}

deleteTipos(id: number) {
  const path = `${this.url}/${id}`;
  return this.httpclient.delete(path);
}

updateTipos(tipos: Tipos) {
  const path = `${this.url}/${tipos.id}`;
  return this.httpclient.put<Tipos>(path, tipos);
}


}
