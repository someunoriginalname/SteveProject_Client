import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { PublishersComponent } from './publishers/publishers.component';
import { GamesComponent } from './publishers/games/games.component';
import { LoginComponent } from './auth/login.component';
export const routes: Routes = [{path:'', 
component:HelloComponent, pathMatch: 'full'}, 
{path:'publishers',component:PublishersComponent},
{path: 'publishers/:id', component:GamesComponent},
{path: 'login', component: LoginComponent }
];

