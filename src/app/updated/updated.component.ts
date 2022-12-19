import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-updated',
  templateUrl: './updated.component.html',
  styleUrls: ['./updated.component.css']
})
export class UpdatedComponent implements OnInit {
  time;
  student: any;
  constructor(private serv: ServiceService) {
    this.time = new Date();
    serv.setStudentTime(this.time);
    this.student = serv.getStudent();
  }

  ngOnInit(): void {
  }


}
