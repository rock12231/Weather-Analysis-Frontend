import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value: number = 1;
  
  options: Options = {
    showTicksValues: true,
    floor: 0,
    ceil: 23,
    showTicks: true
  };

  date:string = ''
  name: string = ''
  sel: string = ''
  data: any
  city: any = 'kanpur'
  c: any = 0

  constructor(private http: HttpClient) {
    this.clickfun();
  }
  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/df/')
      .subscribe(
        rec => {
          this.data = rec
          console.log(rec, "Data")
        }
      )
  }

  getData() {
    console.log(this.name, "Name")
    console.log(this.sel, "selected")
  }

  clickfun() {

    this.http.get('http://127.0.0.1:8000/api/df/?')
      .subscribe(
        rec => {
          this.data = rec
          console.log(rec, "Data")
        }
      )



    // console.log(this.date)
    // let headers = new Headers()
    // headers.append('Content-Type', 'application/json')
    // headers.append('Timestamp', '20000101T0300')
    // let params = new URLSearchParams()
    // params.append("someParamKey", this.someParamValue)
    // http://127.0.0.1:8000/api/df/?format=json
    //https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=d21ed78a8589962c6cebb0784ab717e4
    // this.http.get('http://127.0.0.1:8000/api/df/')
    //   .subscribe(
    //     rec => {
    //       this.data = rec
    //       console.log(rec, "Data")
    //     }
    //   )
  }
}
