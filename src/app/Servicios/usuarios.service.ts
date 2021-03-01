import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpclient :HttpClient) { }


  url ='http://127.0.0.1:8000/api/t_usuarios';


  getUsuarios() {
    const path = `${this.url}`;
    return this.httpclient.get <any>(path);
  }


  createUsuario(usuario: Usuarios) {
    const path = `${this.url}`;
    return this.httpclient.post<Usuarios>(path, usuario); 
  
  }
  deleteUsuarios(id: number) {
    const path = `${this.url}/${id}`;
    return this.httpclient.delete(path);
  }


  updateUsuarios(usuario: Usuarios) {
    const path = `${this.url}/${usuario.id}`;
    return this.httpclient.put<Usuarios>(path, usuario);
  }
  

}
