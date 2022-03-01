import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Usuario } from 'src/app/shared/models/usuario.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title:String = "ServBees";
  usuarioValidador:Usuario = {
    nombre :"",
    clave: ""
  }
  identificacion=0;
  status: 'Cargando...'|'Error'| 'Exitoso'|'Inicial' = 'Inicial' ;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.status = 'Cargando...';
    this.loginService.validarLogin(this.usuarioValidador)
    .subscribe(data=> {
      this.identificacion = data;
      this.status = 'Exitoso';
    }, response => {
      console.error(response.error.mensaje )
      this.status = 'Error';
    });
  }

}
