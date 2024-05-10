import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HelloComponent, HttpClientModule, NavBarComponent]
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.authService.init();
  }
}
