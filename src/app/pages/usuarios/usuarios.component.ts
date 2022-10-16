import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entities/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios: Usuario[] |undefined;

  constructor(private usuarioService: UsuariosService ) { }
 
 
  ngOnInit(): void {
    this.usuarioService.usuariosSelect().subscribe(
      (res) => { 
        this.listaUsuarios = JSON.parse(JSON.stringify(res));
      }
    )
}
}
