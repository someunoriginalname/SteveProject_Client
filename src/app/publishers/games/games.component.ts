import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Game } from './game';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  public games: Game[] = [];
  public columns: string[] = [ "appId","price",
  "players","revenue","year","developer","gameName",];
  id: number;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.id = -1;
  }
  ngOnInit(): void {
    this.getGames();
  }

getGames(){
  let idparameter = this.activatedRoute.snapshot.paramMap.get("id");
  this.id = idparameter? + idparameter: 0;
  this.http.get<Game[]>(`${environment.baseUrl}api/Publishers/PublisherGames/${this.id}`).subscribe(
    {
      next: result => this.games = result,
      error: error => console.log(error)
    });
  }
}
