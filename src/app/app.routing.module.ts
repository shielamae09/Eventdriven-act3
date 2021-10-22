import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '.app/pages/home/home.component';
import { GalleryComponent } from '.app/pages/gallery/gallery.component';
import { ProfileComponent } from '.app/pages/contact/contact.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'profile',component:ContactComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
