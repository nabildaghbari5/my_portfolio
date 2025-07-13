import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }


  ngOnInit(): void {  
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Educations', active: true },
      { label: 'education', active: true }
    ];
  }

  
}
