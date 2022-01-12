import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  tasktext!: string;
  date! : Date ;
  // id ! : number;
  // reminder! : boolean ;

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter() ;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.tasktext){
      alert("Please input a task to add it your to do list.")
      return
    }
    const newTask = {
      tasktext :this.tasktext ,
      date : this.date,
      id: parseInt(Math.random().toString().split(".")[1].substring(0,2)),
      reminder : false, 
      status : true
     }
     console.log(newTask)

    this.onAddTask.emit(newTask);

  
     
  }
 

 

}

