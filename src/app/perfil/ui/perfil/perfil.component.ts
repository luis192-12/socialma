import { Component,input,effect } from '@angular/core';
import { Perfil,PerfilService } from '../../data-access/perfil.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  perfil = input.required<Perfil[]>();
}
