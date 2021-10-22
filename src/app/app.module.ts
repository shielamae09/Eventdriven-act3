import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '.app/pages/home/home.component';
import { GalleryComponent } from '.app/pages/gallery/gallery.component';
import { ContactComponent } from '.app/pages/contact/contact.component';

const routes: Routes =[
  {path: "home", component: HomeComponent},
  {path: "**", redirectTo: "home"},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
   
  ],
  imports: [
    
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
