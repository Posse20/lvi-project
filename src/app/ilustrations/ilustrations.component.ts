import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-ilustrations',
  imports: [CommonModule],
  templateUrl: './ilustrations.component.html',
  styleUrl: './ilustrations.component.css'
})
export class IlustrationsComponent {
  selectedImage: string | null = null;

  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
