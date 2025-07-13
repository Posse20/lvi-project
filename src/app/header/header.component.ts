import { Component, Input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private _router = inject(Router);
  @Input() isMenuOpen: boolean = false;

  goHome(){
    this._router.navigate(['/']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
