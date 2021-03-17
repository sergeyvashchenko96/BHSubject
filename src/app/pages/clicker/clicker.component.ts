import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent {
  url = 'https://api.chucknorris.io/jokes/random';
  url2 = 'https://apidev.medportal.ua/api/MedicalEvents/GetMyConsultations';
  constructor(private http: HttpClient) {
  }


getResolveReq(): any {
  this.http.get<any>(this.url).subscribe(response => console.log(response));
  }

getErrorReq(): any {
    const body = {pageSize: 12, page: 1, personId: 29, instanceId: 2};
    this.http.post<any>(this.url2, body).subscribe(response => {

    }, (error) => {
        throw new Error(`${error.status} - ${error.message}`);
    });
  }
//   setAccess(type: boolean) {
//     localStorage.setItem('access', JSON.stringify(type));
//   }
}
