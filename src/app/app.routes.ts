import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TvComponent } from './components/tv/tv.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { LaptopComponent } from './components/laptop/laptop.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  { path: 'home', component: HomeComponent, title: 'Route | Home Page' },

  { path: 'about', component: AboutComponent, title: 'Route | About Page' },

  { path: 'contact', component: ContactComponent, title: 'Route | Contact Page' },

  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Route | Gallery Page',
    children: [
      { path: '', redirectTo: 'tv', pathMatch: 'full' },

      { path: 'tv', component: TvComponent, title: 'Route | Gallery Page | TV' },

      { path: 'mobile', component: MobileComponent, title: 'Route | Gallery Page | Mobile' },

      { path: 'laptop', component: LaptopComponent, title: 'Route | Gallery Page | Laptop' },
    ],
  },

  { path: '**', component: NotFoundComponent, title: 'Route | Page Not Found' },
];
