import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  expression: string = "";
  Http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') BaseUrl: string) {
    this.Http = http;
    this.baseUrl = BaseUrl;
  }

  public Result = "";

  Click = (value: string) => {
    this.Result += value;
    this.expression += value;
  }

  Cclick = () => {
    this.Result = "";
    this.expression = "";
  }

  EqualClick() {

    this.Http.post<string>(this.baseUrl + 'calculator/Calculate', { "expression": this.expression }, { responseType: "json" }).subscribe(result => {
      this.Result = result;
    }, error => console.error(error));
  }
}
