import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { PublishersComponent } from './publishers/publishers.component';
export const routes: Routes = [{path:'', component:HelloComponent, pathMatch: 'full'}, {path:'publishers',component:PublishersComponent}];

