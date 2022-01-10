import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

tasks : Task[] = TASKS;
  constructor() { }

  ngOnInit(): void {
  }

onDelete(id:number){
 this.tasks = this.tasks.filter((task) => task.id != id);
}


}
