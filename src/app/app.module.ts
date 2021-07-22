import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ObsPageComponent } from './pages/obs-page/obs-page.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { CharactersDetailPageComponent } from './pages/characters-page/pages/characters-detail-page/characters-detail-page.component';
import { LocationDetailPageComponent } from './pages/locations-page/pages/location-detail-page/location-detail-page.component';
import { MarkTextPipe } from './shared/pipes/mark-text.pipe';



export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    ContactPageComponent,
    HeaderComponent,
    LocationPageComponent,
    FavoritesPageComponent,
    ObsPageComponent,
    GalleryComponent,
    CharactersDetailPageComponent,
    LocationDetailPageComponent,
    MarkTextPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
