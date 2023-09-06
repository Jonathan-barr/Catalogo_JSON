import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  items: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('./assets/data.json').subscribe(data => {
      this.items = data;
    });
  }
}
