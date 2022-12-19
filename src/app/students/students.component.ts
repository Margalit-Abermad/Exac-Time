import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students_name;
  
  constructor(private serv:ServiceService) {
    this.students_name=serv.getStudentsName();
   }

  ngOnInit(): void {
  }

  btn(i:string){
    this.serv.setStudentName(i);    
  }

}
