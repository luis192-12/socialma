import { Component, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError } from 'rxjs';
import { Perfil, PerfilCreate, PerfilService } from '../../data-access/perfil.service';
import { toast } from 'ngx-sonner';
import { validatePassword } from '@angular/fire/auth';
import { SnapshotAction } from '@angular/fire/compat/database';
@Component({
  selector: 'app-perfil-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './perfil-form.component.html',
  styleUrl: './perfil-form.component.css',
  providers: [PerfilService],
})
export default class PerfilFormComponent {
  private _formBuilder = inject(FormBuilder);
  private _perfilService = inject(PerfilService);
  private _Router = inject(Router)


idPerfil = input.required<string>();
  
  form = this._formBuilder.group({
    nombres : this._formBuilder.control('',Validators.required),
    apellido: this._formBuilder.control('', Validators.required),
    escuelaProfesional: this._formBuilder.control('',Validators.required),
    anioCarrera: this._formBuilder.control(1,Validators.required),
    fotoUrl: this._formBuilder.control(''),
  });
  


  constructor() {
    effect(() => {
      const id = this.idPerfil();
      if (id) {
        this.getperfi(id);
      }
    });
  }


  async submit(){
    if (this.form.invalid) return;
  try{
    const {nombres, apellido,escuelaProfesional,anioCarrera,fotoUrl}= this.form.value
  const perfil: PerfilCreate={
    nombres: nombres   || '',
    apellido: apellido || '',
    escuelaProfesional:escuelaProfesional || '',
    anioCarrera: anioCarrera || 1,
    fotoUrl : fotoUrl || '',

  };

  const id = this.idPerfil();

  if(id){
    await this._perfilService.update(perfil,id)
  }else{
    await this._perfilService.create(perfil)
  }
  
  
 
  toast.success(`perfil ${id ? 'actualizada' : 'creada'}  correctamente.`)
  this._Router.navigateByUrl('/perfil')
  
  }catch (error) {
    toast.success('ocurrio un error')
  
  }
  } 
  async getperfi(id: string) {
   
const perfilSnapshot = await this._perfilService.getperfi(id);
    if (!perfilSnapshot.exists()) return;

    const perfil = perfilSnapshot.data() as Perfil;

    this.form.patchValue(perfil);
  }
  }
   