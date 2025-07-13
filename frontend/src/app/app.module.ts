import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// auth
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// Page Route
import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';
import { ToastrModule } from 'ngx-toastr';

// Laguage
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// component
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { rootReducer } from './store';
import { GalleryModule } from 'ng-gallery';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
    

@NgModule({
  declarations: [
    AppComponent,
    
  ],  
  imports: [  
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: { 
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

    
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,  
    AppRoutingModule,  
    LayoutsModule,
    ToastrModule.forRoot(),    
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [
    provideAnimations(),  // Nécessaire pour les animations
    importProvidersFrom(GalleryModule)  // Importation du GalleryModule
  ],
  bootstrap: [AppComponent]  
})
export class AppModule { }
