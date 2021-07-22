import { LocationDetailPageComponent } from './pages/locations-page/pages/location-detail-page/location-detail-page.component';
import { CharactersDetailPageComponent } from './pages/characters-page/pages/characters-detail-page/characters-detail-page.component';
import { ObsPageComponent } from './pages/obs-page/obs-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'location', component: LocationPageComponent},
  {path: 'favorites', component: FavoritesPageComponent},
  {path: 'obs', component: ObsPageComponent},
  {path: 'characters/:idCharacter', component: CharactersDetailPageComponent},
  {path: 'location/:idLocation', component: LocationDetailPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
