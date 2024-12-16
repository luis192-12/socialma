import { Component,OnInit,inject,input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PerfilService, Perfil } from '../../data-access/perfil.service';
import { PerfilComponent } from "../../ui/perfil/perfil.component";

@Component({
  selector: 'app-perfil-list',
  standalone: true,
  imports: [RouterLink, PerfilComponent],
  templateUrl: './perfil-list.component.html',
  styleUrl: './perfil-list.component.css',
  providers: [PerfilService],
})
export default class PerfilListComponent {

 
perfilService = inject(PerfilService);
//private _router = inject(Router);
//perfil: Perfil[]=[];
//async ngOninit(){
 // try{
   // this.perfil = await this._perfilService.getAll();
  //}catch(error){
   // console.error('error al cargar los perfiles: ',error);
  //}
//}
//editarPerfil(id: string){
 // this._router.navigate(['/perfil/edit', id]);
//}
}
