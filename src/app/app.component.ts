import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.getTimeSeriesList();
  }
  timeData: any;
  getTimeSeriesList() {
    this.appService.getTimeSeriesList().subscribe((res: any) => {
      if (res) {
        this.timeData = res['Time Series (5min)'];
        console.log(this.timeData);
      }
    });
  }
}
