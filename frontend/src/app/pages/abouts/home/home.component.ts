import { Component, TemplateRef } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: GalleryItem[] = [];
  currentIndex: number = 0;  // Pour contrôler l'image affichée initialement
  modalRef?: BsModalRef;     // Référence à la modale

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.images = [
      new ImageItem({
        src: 'assets/images/media/moi.jpeg',
        thumb: 'assets/images/media/moi.jpeg'
      }),
      new ImageItem({
        src: 'assets/images/media/JS.png',
        thumb: 'assets/images/media/JS.png'
      }),
      new ImageItem({
        src: 'assets/images/media/html.png',
        thumb: 'assets/images/media/html.png'
      }),
      new ImageItem({
        src: 'assets/images/media/code.jpg',
        thumb: 'assets/images/media/code.jpg'
      }),
    ];
  }

 
}
