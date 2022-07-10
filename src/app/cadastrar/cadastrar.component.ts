import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario : Usuario = new Usuario
  confirmarSenha: string
  tipoUser: string
    constructor(
      private authService: AuthService,
      private router: Router
    ) { }
  
    ngOnInit(){
      window.scroll(0,0)
    }
  
    confirmSenha(event: any){
      this.confirmarSenha = event.target.value
    }
  
    tipoUsuario(event:any){
  this.tipoUser = event.target.value
    }
  
    cadastrar(){
  this.usuario.tipo = this.tipoUser
  
  if(this.usuario.senha != this.confirmarSenha){
  alert('As senhas estão diferentes.')
  }else{
  this.authService.cadastro(this.usuario).subscribe((resp: Usuario) => {
    this.usuario = resp
    this.router.navigate(['/login'])
    alert('Usuário cadastrado com sucesso!')
  
  })
  }
    }
}