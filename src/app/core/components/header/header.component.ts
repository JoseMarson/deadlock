import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showNav: boolean = false;

  constructor(private router: Router) {}

  toggleNav(): void {
    this.showNav = !this.showNav;
  }
}
