import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from './models/usuario.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${environment.API_URL_USUARIO}/usuarios/login`;

  constructor(
    private http: HttpClient
  ) { }

  validarLogin(data: Usuario) {
    return this.http.post<any>(this.apiUrl, data);
  }
}
