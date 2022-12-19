import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {
  institution: any;
  
  constructor(private serv:ServiceService) {
    this.institution=serv.getProfile().institution;

   }

  ngOnInit(): void {
  }
  btn(i:string){
    this.serv.setStudentCycle(i);
  }

}
