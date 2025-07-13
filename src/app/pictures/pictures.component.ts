import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pictures',
  imports: [CommonModule],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css'
})
export class PicturesComponent {
  images: string[] = [
    'assets/picture-1.jpeg',
    'assets/picture-2.jpeg',
    'assets/picture-3.jpeg',
    'assets/picture-4.jpeg',
    'assets/picture-5.jpeg',
    'assets/picture-6.jpeg',
    'assets/picture-7.jpeg',
    'assets/picture-8.jpeg',
    'assets/picture-9.jpeg',
    'assets/picture-10.jpeg',
    'assets/picture-11.jpeg',
    'assets/picture-12.png',
    'assets/picture-13.jpeg',
    'assets/picture-14.jpeg',
    'assets/picture-15.jpeg',
    'assets/picture-16.jpeg',
  ];
  currentIndex = 0;
  selectedImage: string | null = null;

  nextImage() {
    this.selectedImage = null;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.selectedImage = null;
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  openImage(imageUrl: string): void {
    console.log(imageUrl);
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
