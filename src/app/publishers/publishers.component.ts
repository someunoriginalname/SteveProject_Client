import { Component } from '@angular/core';
import { Publisher } from './publisher';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-publishers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './publishers.component.html',
  styleUrl: './publishers.component.scss'
})
export class PublishersComponent {
  public publishers: Publisher[] = [];
publisher: any;
  constructor(private http: HttpClient){}
  ngOnInit(): void{
    this.getPublishers();
  }
  getPublishers(){ //was missing / before weatherforecast
    this.http.get<Publisher[]>(environment.baseUrl +'api/Publishers').subscribe(
      {
        next: result => this.publishers = result,
        error: error => console.error(error)
      }


    );
  }
}
