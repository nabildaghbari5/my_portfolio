import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { GalleryModule } from 'ng-gallery';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),  // Nécessaire pour les animations
    importProvidersFrom(GalleryModule)  // Importation du GalleryModule
  ]
};
