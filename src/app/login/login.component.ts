import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(usernameInput: HTMLInputElement, passwordInput: HTMLInputElement): void {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username && password) {
      sessionStorage.setItem('token', 'example-token');
      sessionStorage.setItem('username', username);
      this.router.navigate(['/profile']);
    } else {
      alert('Por favor, ingresa un usuario y contraseña válidos.');
    }
  }
}


