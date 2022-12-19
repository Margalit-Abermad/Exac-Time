import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent implements OnInit {

  status = "";
  date = "";
  time: any;
  constructor(private serv: ServiceService) {
    this.time = serv.getTime();
  }
  ngOnInit(): void {
    this.time1();
  }

  time1() {
    var mytime = setInterval(() => {
      this.serv.setDate(new Date());
      this.time=this.serv.getTime();
    }, 1000)
  }

}
