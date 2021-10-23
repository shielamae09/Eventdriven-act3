import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './app/pages/profile/profile.component';
import { GalleryComponent } from './app/pages/gallery/gallery.component';
import { ContactComponent } from './app/pages/contact/contact.component';

const routes: Routes = [
  {path:'', component:ProfileComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'**',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
