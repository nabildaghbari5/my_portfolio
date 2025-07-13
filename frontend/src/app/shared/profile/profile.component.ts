import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  
   constructor(public translate: TranslateService) {
      translate.setDefaultLang('en');
    }  
   // follow button toggle
   Followbtn(ev: any) {
    ev.target.closest('button').classList.toggle('active')
  }  

}
