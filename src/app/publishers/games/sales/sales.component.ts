import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { Sale } from './sale';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {
  public sales: Sale[] = [];
  public columns: string[] = [ "publisherID", "publisher", 
  "units", "sales",];
  id: number;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
    this.id = -1;
  }
  ngOnInit(): void{
    this.getSales();
  }
  getSales(){
    let idparameter = this.activatedRoute.snapshot.paramMap.get("id");
    this.id = idparameter? + idparameter: 0;
    this.http.get<Sale[]>(`${environment.baseUrl}api/Games/GetSales`).subscribe(
      {
        next: result => this.sales = result,
        error: error => console.log(error)
      });
    }
  }