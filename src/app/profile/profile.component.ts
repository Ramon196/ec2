import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [NgIf],
  template: `
    <h2>Perfil</h2>
    <div *ngIf="isAuthenticated()">
      <p>Bienvenido, {{ username }}</p>
    </div>
  `
})
export class ProfileComponent {
  username: string = 'Usuario';

  constructor(private router: Router) {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }
}
