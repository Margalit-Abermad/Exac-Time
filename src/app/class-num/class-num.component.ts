import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-class-num',
  templateUrl: './class-num.component.html',
  styleUrls: ['./class-num.component.css']
})
export class ClassNumComponent implements OnInit {
  number_class: number[]=[];
  num_class;
  constructor(private serv:ServiceService) { 
    this.num_class=serv.getProfile().mis_class;
    this.class_num();
  }

  class_num(){
    for (let i = 1; i <= this.num_class; i++) {
        this.number_class.push(i);
    }
  }

  ngOnInit(): void {
  }
  btn(i:number){
    this.serv.setStudentClass_num(i);    
  }

}
