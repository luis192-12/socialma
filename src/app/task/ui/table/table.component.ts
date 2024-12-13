import { Component, effect,input } from '@angular/core';

import { RouterLink } from '@angular/router';
import { Task } from '../../data-access/task.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html',

})
export class TableComponent {
perfil = input.required<Task[]>();

}
