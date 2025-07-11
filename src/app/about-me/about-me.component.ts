import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  carrouselImages = [
    'assets/mamacita-1.jpg',
    'assets/mamacita-2.jpg',
    'assets/mamacita-3.jpg',
    'assets/mamacita-4.jpg'
  ]
  currentImage = this.carrouselImages[0];
  private index = 0;

  constructor() {
    setInterval(() => {
      this.index = (this.index + 1) % this.carrouselImages.length;
      this.currentImage = this.carrouselImages[this.index];
    }, 3000); // cambia cada 3 segundos
  }
}
