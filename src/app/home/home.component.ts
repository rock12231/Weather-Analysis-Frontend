import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = ''
  sel: string = ''
  data: any
  city: any = 'kanpur'
  c: any = 0

  constructor(private http: HttpClient) {
    this.clickfun();
  }
  ngOnInit(): void {
  }

  getData() {
    console.log(this.name, "Name")
    console.log(this.sel, "selected")
  }

  clickfun() {
    // http://127.0.0.1:8000/api/df/?format=json
    //https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=d21ed78a8589962c6cebb0784ab717e4
    this.http.get('http://127.0.0.1:8000/api/df/?format=json')
      .subscribe(
        rec => {
          this.data = rec;
          console.log(rec, "Data")
        }
      )
  }

}
