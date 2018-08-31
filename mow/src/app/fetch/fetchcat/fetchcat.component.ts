import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Session } from 'protractor';
@Component({
  selector: 'app-fetchcat',
  templateUrl: './fetchcat.component.html',
  styleUrls: ['./fetchcat.component.css']
})
export class FetchcatComponent implements OnInit {
  temp;tempcat;cats=[];flag=true;
  constructor(private http:HttpClient) {
    this.temp=sessionStorage.getItem('resId')
    this.http.post("http://localhost:6363/user/getcat", {
      id: this.temp
    }).subscribe((res: any) => {
      this.tempcat = res.data;
      this.cats = this.tempcat.category;
      // console.log("restid---", this.temp, "---")
      console.log("cats---", this.cats, "---")
      // console.log('tempcat',this.tempcat)
    })
    sessionStorage.setItem("catId", this.temp)
  }


  ngOnInit() {
  }

}
