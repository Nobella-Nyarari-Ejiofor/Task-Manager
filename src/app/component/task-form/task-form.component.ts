import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  tasktext!: string;
  date! : Date ;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.tasktext){
      alert("Please input a task to add it your task list.")
      return
    }
  }

}
