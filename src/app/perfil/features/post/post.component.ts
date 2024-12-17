import { Component, inject, effect, input } from '@angular/core';
import { routes } from '../../../app.routes';
import { Router, RouterLink } from '@angular/router';
import { Post,PostService,PostCreate } from '../../data-access/post.service';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Form,FormBuilder,FormGroup } from '@angular/forms';
import { Perfil } from '../../data-access/perfil.service';
import { PerfilComponent } from '../../ui/perfil/perfil.component';
import { toast } from 'ngx-sonner';
import { Input } from '@angular/core';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ReactiveFormsModule, ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export default class PostComponent {
  private _formBuilder = inject(FormBuilder);
  // private _postService = inject(PostService);
   private _Router = inject(Router)
 
 

   idPost  = input.required<string>();


   form = this._formBuilder.group({
     titulo : this._formBuilder.control('',Validators.required),
    texto: this._formBuilder.control('', Validators.required),
   
     foto: this._formBuilder.control(''),
   });
   
 
 

 
   async submit(){
     if (this.form.invalid) return;
   try{
     const {titulo,texto,foto}= this.form.value
   const perfil: PostCreate={
     titulo: titulo   || '',
    texto: texto || '',
    
     foto : foto || '',
 
   };
 
   const id = this.idPost();
 

   
   
  
   toast.success(`Tarea ${id ? 'actualizada' : 'creada'}  correctamente.`)
   this._Router.navigateByUrl('/perfil')
   
   }catch (error) {
     toast.success('ocurrio un error')
   
   }
  }}
    