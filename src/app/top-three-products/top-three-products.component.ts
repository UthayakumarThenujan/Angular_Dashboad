import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrl: './top-three-products.component.scss'
})
export class TopThreeProductsComponent implements OnInit{

  public getJsonValue:any;
  constructor(private http:HttpClient){}

  ngOnInit(): void {
      this.getMethod();
  }

  public getMethod(){
    this.http.get("http://127.0.0.1:8001/CallAnalysis/call-sentiments").subscribe((data)=> {
      console.log(data);
      this.getJsonValue =data;
    });
  }

  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 Products'
    
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deodarant',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        type: 'bar',
        showInLegend:false,
        data:[
          {
            name: 'Lenova Thinkpad E15',
            y: 39,
            color:'#044342',
          },
          {
            name: 'Nectar Orange Juice',
            y: 385,
            color:'#568594',
          },
          {
            name: 'Axe Deodarant',
            y: 275,
            color:'#ed9e20',
          }

        ]
      }
    ],
    credits: {
      enabled: false
    }
  })
}
