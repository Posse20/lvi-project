import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comics',
  imports: [NgIf],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css'
})
export class ComicsComponent {

  selectedComic: { pages: string[] } | null = null;
  currentPage: number = 0;
  
  comics = [
    {
      pages: [
        'assets/comic-1.png',
        'assets/comic-2.png',
        'assets/comic-3.png',
        'assets/comic-4.png'
      ]
    },
    // puedes añadir más cómics aquí luego
  ];
  
  openComic(index: number) {
    this.selectedComic = this.comics[index];
    this.currentPage = 0;
  }
  
  closeComic() {
    this.selectedComic = null;
  }
  
  nextPage(event: Event) {
    event.stopPropagation();
    if (this.selectedComic && this.currentPage < this.selectedComic.pages.length - 1) {
      this.currentPage++;
    }
  }
  
  prevPage(event: Event) {
    event.stopPropagation();
    if (this.selectedComic && this.currentPage > 0) {
      this.currentPage--;
    }
  }
  
}
