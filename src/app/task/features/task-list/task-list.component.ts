import { Component, inject } from '@angular/core';
//import { TableComponent } from '../../ui/table/table.component';
//import { RouterLink } from '@angular/router';
import { TaskService } from '../../data-access/task.service';
import { RouterLink } from '@angular/router';
import { TableComponent } from '../../ui/table/table.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink,TableComponent],
  templateUrl: './task-list.component.html',
  providers: [TaskService],
})
export default class TaskListComponent {
  tasksService = inject(TaskService);
}