import { Component, effect,input } from '@angular/core';
//import{Task} from '../table/table.component.spec'
import { RouterLink } from '@angular/router';
import { Task } from '../../data-access/task.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html',

})
export class TableComponent {
tasks = input.required<Task[]>();

}
